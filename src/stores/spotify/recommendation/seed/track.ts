import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Track } from '@/types/spotify/Track'

export const useSpotifyRecommendationSeedTrackStore = defineStore('spotify-recommendation-seed-track', () => {
  const seedTracks: Ref<Track[]> = ref([])

  const addTrack = (track: Track): void => {
    seedTracks.value.push(track)
  }

  const isTrackAdded = (track: Track): boolean => {
    return seedTracks.value.filter((seedTrack: Track) => seedTrack.id === track.id).length > 0
  }

  const removeTrack = (track: Track): void => {
    seedTracks.value.splice(seedTracks.value.findIndex((seedTrack: Track) => seedTrack.id === track.id), 1)
  }

  return {
    seedTracks,
    addTrack,
    isTrackAdded,
    removeTrack
  }
})
