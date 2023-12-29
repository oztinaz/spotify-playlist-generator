import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'

import SpotifyMainView from '@/views/spotify/MainView.vue'
import SpotifyAskAuthorizationView from '@/views/spotify/AskAuthorizationView.vue'
import SpotifyAuthorizationView from '@/views/spotify/AuthorizationView.vue'

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

export default router
