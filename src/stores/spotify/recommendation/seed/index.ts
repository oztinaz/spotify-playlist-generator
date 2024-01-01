import { defineStore } from 'pinia'
import { ref, type ComputedRef, type Ref, computed } from 'vue'
import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item'

export const useSpotifyRecommendationSeedIndexStore = defineStore('spotify-recommendation-seed-index', () => {
  const items: Ref<SeedCardItem[]> = ref([])
  
  const query: Ref<string> = ref('')

  const type: Ref<'artist' | 'genre' | 'track' | ''> = ref('')

  const placeholder: ComputedRef<string> = computed((): string => {
    return `Search ${type.value}`
  })

  const setItems = (i: SeedCardItem[]): void => {
    items.value = i
  }

  const setType = (t: 'artist' | 'genre' | 'track'): void => {
    type.value = t
  }

  return {
    items,
    placeholder,
    query,
    type,
    setItems,
    setType
  }
})
