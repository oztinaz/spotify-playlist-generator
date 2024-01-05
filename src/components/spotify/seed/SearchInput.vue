<script setup lang="ts">
import { useSpotifyRecommendationSeedIndexStore } from '@/stores/spotify/recommendation/seed/index'
import { storeToRefs } from 'pinia';

const spotifyRecommendationSeedIndexStore = useSpotifyRecommendationSeedIndexStore()
const { placeholder, query } = storeToRefs(spotifyRecommendationSeedIndexStore)
</script>

<template>
  <input
    type="text"
    class="form-control"
    :placeholder="placeholder"
    v-model="query"
    data-test="search-input"
  />
</template>

<style scoped></style>