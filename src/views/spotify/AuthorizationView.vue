<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useSpotifyTokenStore } from '@/stores/spotify/token'
import type { SpotifyAccessToken } from '@/types/spotify/Token'
import { CookieUtils } from '@/utils/Cookie'

const route = useRoute()
const router = useRouter()

const spotifyTokenStore = useSpotifyTokenStore()
const { fetchAccessToken } = spotifyTokenStore

onMounted(async () => {
  if (route.query.code) {
    const spotifyAccessToken: SpotifyAccessToken = await fetchAccessToken(
      route.query.code as string
    )

    const expiresAt = new Date()
    expiresAt.setTime(expiresAt.getTime() + spotifyAccessToken.expires_in * 1000)

    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', spotifyAccessToken.access_token, expiresAt)
    CookieUtils.set('X-SPOTIFY-REFRESH-TOKEN', spotifyAccessToken.refresh_token)

    router.push({
      name: 'spotify-main'
    })
  }
})
</script>

<template>
  <div id="authorization-view">Authorizing...</div>
</template>

<style scoped></style>
