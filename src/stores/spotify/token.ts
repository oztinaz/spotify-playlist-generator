import { defineStore, storeToRefs } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'
import { computed, type ComputedRef } from 'vue'
import type { SpotifyToken } from '@/types/spotify/Token'
import { AxiosUtils } from '@/utils/Axios'

export const useSpotifyTokenStore = defineStore('spotify-token', () => {
  const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
  const { accountsUrl } = storeToRefs(spotifyAuthorizationStore)

  const tokenUrl: ComputedRef<string> = computed((): string => {
    return `${accountsUrl.value}/api/token`
  })

  const fetchToken = async (headers: { [key: string]: any }, body: { [key: string]: any }): Promise<SpotifyToken> => {
    return await AxiosUtils.post<SpotifyToken>(
      tokenUrl.value,
      headers,
      {},
      body
    )
  }

  return {}
})
