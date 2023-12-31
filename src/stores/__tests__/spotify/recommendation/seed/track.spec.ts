import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyRecommendationSeedTrackStore } from '@/stores/spotify/recommendation/seed/track'

describe('stores/spotify/recommendation/seed/track', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockTrack1: any = {
    id: '1'
  }

  const mockTrack2: any = {
    id: '2'
  }

  test('addTrack adds an track to seeds', () => {
    const store = useSpotifyRecommendationSeedTrackStore()

    store.addTrack(mockTrack1)
    expect(store.seedTracks).toStrictEqual([mockTrack1])
  })

  test('removeTrack removes the track specified from seeds', () => {
    const store = useSpotifyRecommendationSeedTrackStore()

    store.addTrack(mockTrack1)
    store.addTrack(mockTrack2)
    expect(store.seedTracks).toStrictEqual([mockTrack1, mockTrack2])

    store.removeTrack(mockTrack2)
    expect(store.seedTracks).toStrictEqual([mockTrack1])
  })

  test('isTrackAdded returns true when the track is in the seeds', () => {
    const store = useSpotifyRecommendationSeedTrackStore()

    store.addTrack(mockTrack1)
    expect(store.isTrackAdded(mockTrack1)).toBeTruthy()
  })

  test('isTrackAdded returns false when the track is not in the seeds', () => {
    const store = useSpotifyRecommendationSeedTrackStore()
    expect(store.isTrackAdded(mockTrack1)).toBeFalsy()
  })
})
