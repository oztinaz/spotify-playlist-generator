import { beforeEach, describe, expect, test, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyGenreStore } from '@/stores/spotify/genre'
import { AxiosUtils } from '@/utils/Axios'
import { CookieUtils } from '@/utils/Cookie'
import type { Genre } from '@/types/spotify/Genre'

describe('stores/spotify/genre', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockGenres: Genre[] = ['g1', 'g2']

  test('uses AxiosUtils.get properly', async () => {
    const str: string = 'test str'

    import.meta.env.VITE_SPOTIFY_API_URL = str
    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', str)

    const store = useSpotifyGenreStore()
    const spyGet = vi.spyOn(AxiosUtils, 'get').mockResolvedValueOnce(null)

    const response = await store.fetchGenres()
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith(
      `${str}/recommendations/available-genre-seeds`,
      {
        Authorization: `Bearer ${str}`
      }
    )
  })

  test('fetches genres properly', async () => {
    const str: string = 'test str'

    import.meta.env.VITE_SPOTIFY_API_URL = str
    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', str)

    const store = useSpotifyGenreStore()
    const spyGet = vi.spyOn(AxiosUtils, 'get').mockResolvedValueOnce({
      genres: mockGenres
    })

    const response = await store.fetchGenres()
    expect(response).toStrictEqual({
      genres: mockGenres
    })
  })

  test('sets genres', () => {
    const store = useSpotifyGenreStore()
    store.setGenres(mockGenres)
    expect(store.genres).toStrictEqual(mockGenres)
  })
})
