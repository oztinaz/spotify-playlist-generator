import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Genre } from '@/types/spotify/Genre'

export const useSpotifyRecommendationSeedGenreStore = defineStore('spotify-recommendation-seed-genre', () => {
  const seedGenres: Ref<Genre[]> = ref([])

  const addGenre = (genre: Genre): void => {
    seedGenres.value.push(genre)
  }

  const isGenreAdded = (genre: Genre): boolean => {
    return seedGenres.value.filter((seedGenre: Genre) => seedGenre === genre).length > 0
  }

  const removeGenre = (genre: Genre): void => {
    seedGenres.value.splice(seedGenres.value.findIndex((seedGenre: Genre) => seedGenre === genre), 1)
  }

  return {
    seedGenres,
    addGenre,
    isGenreAdded,
    removeGenre
  }
})
