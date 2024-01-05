import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyRecommendationSeedArtistStore } from '@/stores/spotify/recommendation/seed/artist'

describe('stores/spotify/recommendation/seed/artist', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockArtist1: any = {
    id: '1'
  }

  const mockArtist2: any = {
    id: '2'
  }

  test('addArtist adds an artist to seeds', () => {
    const store = useSpotifyRecommendationSeedArtistStore()

    store.addArtist(mockArtist1)
    expect(store.seedArtists).toStrictEqual([mockArtist1])
  })

  test('removeArtist removes the artist specified from seeds', () => {
    const store = useSpotifyRecommendationSeedArtistStore()

    store.addArtist(mockArtist1)
    store.addArtist(mockArtist2)
    expect(store.seedArtists).toStrictEqual([mockArtist1, mockArtist2])

    store.removeArtist(mockArtist2)
    expect(store.seedArtists).toStrictEqual([mockArtist1])
  })

  test('isArtistAdded returns true when the artist is in the seeds', () => {
    const store = useSpotifyRecommendationSeedArtistStore()

    store.addArtist(mockArtist1)
    expect(store.isArtistAdded(mockArtist1)).toBeTruthy()
  })

  test('isArtistAdded returns false when the artist is not in the seeds', () => {
    const store = useSpotifyRecommendationSeedArtistStore()
    expect(store.isArtistAdded(mockArtist1)).toBeFalsy()
  })
})
