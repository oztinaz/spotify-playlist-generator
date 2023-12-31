import { defineStore, storeToRefs } from 'pinia'
import { useSpotifyApiStore } from '@/stores/spotify/api'
import { AxiosUtils } from '@/utils/Axios'
import { CookieUtils } from '@/utils/Cookie'
import type { SpotifyGenreResponse } from '@/types/spotify/responses/Genre'
import { ref, type Ref } from 'vue'
import type { Genre } from '@/types/spotify/Genre'

export const useSpotifyGenreStore = defineStore('spotify-genre', () => {
  const spotifyApiStore = useSpotifyApiStore()
  const { apiUrl } = storeToRefs(spotifyApiStore)

  const genres: Ref<Genre[]> = ref([])

  const fetchGenres = async (): Promise<SpotifyGenreResponse> => {
    return await AxiosUtils.get(
      `${apiUrl.value}/recommendations/available-genre-seeds`,
      {
        Authorization: `Bearer ${CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')}`
      }
    )
  }

  const setGenres = (g: Genre[]): void => {
    genres.value = g
  }

  return {
    genres,
    fetchGenres,
    setGenres
  }
})
