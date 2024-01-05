import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyApiStore } from '@/stores/spotify/api'

describe('stores/spotify/api', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('serves apiUrl properly', () => {
    const str: string = 'test str'

    import.meta.env.VITE_SPOTIFY_API_URL = str

    const store = useSpotifyApiStore()

    expect(store.apiUrl).toBe(str)
  })
})
