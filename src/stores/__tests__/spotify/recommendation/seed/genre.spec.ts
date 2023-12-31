import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyRecommendationSeedGenreStore } from '@/stores/spotify/recommendation/seed/genre'
import type { Genre } from '@/types/spotify/Genre'

describe('stores/spotify/recommendation/seed/genre', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockGenre1: Genre = 'a'

  const mockGenre2: Genre = 'b'

  test('addGenre adds an genre to seeds', () => {
    const store = useSpotifyRecommendationSeedGenreStore()

    store.addGenre(mockGenre1)
    expect(store.seedGenres).toStrictEqual([mockGenre1])
  })

  test('removeGenre removes the genre specified from seeds', () => {
    const store = useSpotifyRecommendationSeedGenreStore()

    store.addGenre(mockGenre1)
    store.addGenre(mockGenre2)
    expect(store.seedGenres).toStrictEqual([mockGenre1, mockGenre2])

    store.removeGenre(mockGenre2)
    expect(store.seedGenres).toStrictEqual([mockGenre1])
  })

  test('isGenreAdded returns true when the genre is in the seeds', () => {
    const store = useSpotifyRecommendationSeedGenreStore()

    store.addGenre(mockGenre1)
    expect(store.isGenreAdded(mockGenre1)).toBeTruthy()
  })

  test('isGenreAdded returns false when the genre is not in the seeds', () => {
    const store = useSpotifyRecommendationSeedGenreStore()
    expect(store.isGenreAdded(mockGenre1)).toBeFalsy()
  })
})
