import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'

describe('stores/spotify/authorization', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('creates authorizationUrl properly', () => {
    const str: string = 'test str'

    import.meta.env.VITE_SPOTIFY_ACCOUNTS_URL = str
    import.meta.env.VITE_SPOTIFY_CLIENT_ID = str
    import.meta.env.VITE_SPOTIFY_REDIRECT_URI = str
    import.meta.env.VITE_SPOTIFY_STATE = str
    import.meta.env.VITE_SPOTIFY_SCOPE = str

    const store = useSpotifyAuthorizationStore()

    expect(store.authorizationUrl).toBe(
      `${str}/authorize?` +
        `client_id=${str}&` +
        `redirect_uri=${str}&` +
        `response_type=code&` +
        `state=${str}&` +
        `scope=${str}`
    )
  })
})
