import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyRecommendationSeedIndexStore } from '@/stores/spotify/recommendation/seed/index'
import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item'

describe('stores/spotify/recommendation/seed/index', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockItems: SeedCardItem[] = [
    {
      id: 'id',
      description: 'description',
      imageUrl: 'imageUrl',
      title: 'title'
    }
  ]

  const mockType: 'artist' | 'genre' | 'track' = 'artist'

  test('setItems sets items properly', () => {
    const store = useSpotifyRecommendationSeedIndexStore()

    store.setItems(mockItems)
    expect(store.items).toStrictEqual(mockItems)
  })

  test('setType sets type properly', () => {
    const store = useSpotifyRecommendationSeedIndexStore()

    store.setType(mockType)
    expect(store.type).toStrictEqual(mockType)
  })

  test('checks placeholder', () => {
    const store = useSpotifyRecommendationSeedIndexStore()

    store.setType(mockType)
    expect(store.placeholder).toBe(`Search ${mockType}`)
  })
})
