import { beforeEach, describe, expect, test, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifySearchStore } from '@/stores/spotify/search'
import { AxiosUtils } from '@/utils/Axios'
import type { SpotifySearchResponse } from '@/types/spotify/responses/Search'
import { CookieUtils } from '@/utils/Cookie'

describe('stores/spotify/search', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('search uses AxiosUtils.get properly', async () => {
    const str: string = 'test str'

    import.meta.env.VITE_SPOTIFY_API_URL = str
    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', str)

    const query: string = 'any query'
    const type: string = 'any type'

    const store = useSpotifySearchStore()
    const spyGet = vi.spyOn(AxiosUtils, 'get').mockResolvedValueOnce(null)

    const response = await store.search(query, type)
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith(`${str}/search`, {Authorization: `Bearer ${str}`}, { q: query, type: type })
    expect(response).toBeNull()
  })
})
