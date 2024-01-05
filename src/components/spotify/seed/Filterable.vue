<script setup lang="ts">
import SearchInput from '@/components/spotify/seed/SearchInput.vue';
import SeedCardsContainer from '@/components/spotify/seed/SeedCardsContainer.vue';

import { useSpotifyGenreStore } from '@/stores/spotify/genre';
import { useSpotifyRecommendationSeedIndexStore } from '@/stores/spotify/recommendation/seed';
import { storeToRefs } from 'pinia';
import { onMounted, watch, type ComputedRef, computed } from 'vue';

import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item';
import type { Genre } from '@/types/spotify/Genre';


const spotifyGenreStore = useSpotifyGenreStore()
const { genres } = storeToRefs(spotifyGenreStore)

const spotifyRecommendationSeedIndexStore = useSpotifyRecommendationSeedIndexStore()

const { items, query, type } = storeToRefs(spotifyRecommendationSeedIndexStore)
const { setItems, setType } = spotifyRecommendationSeedIndexStore

const props = withDefaults(defineProps<{
  type: 'genre'
  maxHeight?: number
}>(), {
  maxHeight: 300
})

const key: ComputedRef<string> = computed((): string => {
  return `${type.value}s`
})

const maxHeight: ComputedRef<number> = computed((): number => {
  return props.maxHeight
})

const filterGenres = (): Genre[] => {
  return genres.value.filter((genre: Genre) => genre.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()))
}

const mapper = (seeds: Genre[]): SeedCardItem[] => {
  return filterGenres().map((genre: Genre) => {
    return {
      id: genre,
      description: '',
      imageUrl: '',
      title: genre
    }
  })
}

const makeItems = (): SeedCardItem[] => {
  const seeds: Genre[] = filterGenres()
  return mapper(seeds)
}

watch(query, () => {
  if (query.value === '') {
    setItems([])
    return
  }
  const items: SeedCardItem[] = makeItems()
  setItems(items)
})

onMounted(() => {
  setType(props.type)
})
</script>

<template>
  <div class="spotify-seed">
    <SearchInput />
    <SeedCardsContainer :items="items" :max-height="maxHeight"/>
  </div>
</template>

<style scoped>
.spotify-seed {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>