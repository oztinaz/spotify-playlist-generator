import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Artist } from '@/types/spotify/Artist'

export const useSpotifyRecommendationSeedArtistStore = defineStore('spotify-recommendation-seed-artist', () => {
  const seedArtists: Ref<Artist[]> = ref([])

  const addArtist = (artist: Artist): void => {
    seedArtists.value.push(artist)
  }

  const isArtistAdded = (artist: Artist): boolean => {
    return seedArtists.value.filter((seedArtist: Artist) => seedArtist.id === artist.id).length > 0
  }

  const removeArtist = (artist: Artist): void => {
    seedArtists.value.splice(seedArtists.value.findIndex((seedArtist: Artist) => seedArtist.id === artist.id), 1)
  }

  return {
    seedArtists,
    addArtist,
    isArtistAdded,
    removeArtist
  }
})
