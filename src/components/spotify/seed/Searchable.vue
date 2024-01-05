<script setup lang="ts">
import SearchInput from '@/components/spotify/seed/SearchInput.vue';
import SeedCardsContainer from '@/components/spotify/seed/SeedCardsContainer.vue';

import { useSpotifySearchStore } from '@/stores/spotify/search';
import { useSpotifyRecommendationSeedIndexStore } from '@/stores/spotify/recommendation/seed';
import { storeToRefs } from 'pinia';
import { onMounted, watch, type ComputedRef, computed } from 'vue';

import type { Artist } from '@/types/spotify/Artist';
import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item';
import type { Track } from '@/types/spotify/Track';
import type { SpotifySearchResponse } from '@/types/spotify/responses/Search';

const spotifySearchStore = useSpotifySearchStore()
const { search } = spotifySearchStore

const spotifyRecommendationSeedIndexStore = useSpotifyRecommendationSeedIndexStore()

const { items, query, type } = storeToRefs(spotifyRecommendationSeedIndexStore)
const { setItems, setType } = spotifyRecommendationSeedIndexStore

const props = withDefaults(defineProps<{
  type: 'artist' | 'track', 
  mapper: Function,
  maxHeight?: number
}>(), {
  maxHeight: 300
})

const key: ComputedRef<'artists' | 'tracks'> = computed((): 'artists' | 'tracks' => {
  return `${props.type}s`
})

const maxHeight: ComputedRef<number> = computed((): number => {
  return props.maxHeight
})

const mapper = (seeds: Artist[] | Track[]): SeedCardItem[] => {
  return props.mapper(seeds)
}

const fetcher = async (): Promise<any[]> => {
  const response: SpotifySearchResponse = await search(query.value, type.value)
  if (response[key.value]) {
    return (response[key.value] as any).items
  }
  return []
}

const makeItems = async (): Promise<SeedCardItem[]> => {
  const seeds: Artist[] | Track[] = await fetcher()
  return mapper(seeds)
}

watch(query, async () => {
  if (query.value === '') {
    setItems([])
    return
  }
  const items: SeedCardItem[] = await makeItems()
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