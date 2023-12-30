import { beforeEach, describe, test, vi, type Mocked, expect } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyTokenStore } from '@/stores/spotify/token'

import { AxiosUtils } from "@/utils/Axios";

describe('stores/spotify/token', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('fetchAccessToken uses AxiosUtils.post method', async () => {
    const fakeResponse: string = 'fake response'
		vi.spyOn(AxiosUtils, 'post').mockResolvedValueOnce(fakeResponse);

    const spotifyTokenStore = useSpotifyTokenStore()
    const { fetchAccessToken } = spotifyTokenStore

    const response = await fetchAccessToken('any url')

    expect(response).toBe(fakeResponse)
  })
})