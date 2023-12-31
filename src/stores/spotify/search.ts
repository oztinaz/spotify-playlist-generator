import { defineStore, storeToRefs } from 'pinia'
import { useSpotifyApiStore } from '@/stores/spotify/api'
import { AxiosUtils } from '@/utils/Axios'
import { CookieUtils } from '@/utils/Cookie'
import type { SpotifySearchResponse } from '@/types/spotify/responses/Search'

export const useSpotifySearchStore = defineStore('spotify-search', () => {
  const spotifyApiStore = useSpotifyApiStore()
  const { apiUrl } = storeToRefs(spotifyApiStore)

  const search = async (query: string, type: string): Promise<SpotifySearchResponse> => {
    return await AxiosUtils.get(
      `${apiUrl.value}/search`,
      {
        Authorization: `Bearer ${CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')}`
      },
      {
        q: query,
        type: type
      }
    )
  }

  return {
    search
  }
})
