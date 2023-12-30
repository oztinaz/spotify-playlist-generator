import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'

import SpotifyMainView from '@/views/spotify/MainView.vue'
import SpotifyAskAuthorizationView from '@/views/spotify/AskAuthorizationView.vue'
import SpotifyAuthorizationView from '@/views/spotify/AuthorizationView.vue'
import { CookieUtils } from '@/utils/Cookie'
import { useSpotifyTokenStore } from '@/stores/spotify/token'
import type { SpotifyRefreshToken } from '@/types/spotify/Token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/spotify',
      name: 'spotify-main',
      component: SpotifyMainView,
      children: [
        {
          path: '/spotify/ask-authorization',
          name: 'spotify-ask-authorization',
          component: SpotifyAskAuthorizationView
        },
        {
          path: '/spotify/authorization',
          name: 'spotify-authorization',
          component: SpotifyAuthorizationView
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from) => {
  const accessToken: string | undefined = CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')
  const refreshToken: string | undefined = CookieUtils.get('X-SPOTIFY-REFRESH-TOKEN')

  if (
    accessToken === undefined &&
    refreshToken === undefined &&
    to.path.startsWith('/spotify') &&
    to.name !== 'spotify-ask-authorization' &&
    to.name !== 'spotify-authorization'
  ) {
    return {
      name: 'spotify-ask-authorization'
    }
  }

  if (
    accessToken === undefined &&
    refreshToken !== undefined &&
    to.path.startsWith('/spotify')
  ) {
    const spotifyTokenStore = useSpotifyTokenStore()
    const { fetchRefreshToken } = spotifyTokenStore
    const spotifyRefreshToken: SpotifyRefreshToken = await fetchRefreshToken(refreshToken)
    CookieUtils.remove('X-SPOTIFY-REFRESH-TOKEN')

    const expiresAt = new Date()
    expiresAt.setTime(expiresAt.getTime() + spotifyRefreshToken.expires_in * 1000)

    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', spotifyRefreshToken.access_token, expiresAt)
  }
})

export default router
