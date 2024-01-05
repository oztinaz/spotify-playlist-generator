import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useSpotifyApiStore = defineStore('spotify-api', () => {
  const apiUrl: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_API_URL)

  return {
    apiUrl
  }
})
