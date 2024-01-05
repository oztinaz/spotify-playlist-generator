<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item';

const props = defineProps<{
  item: SeedCardItem
}>()

const item: ComputedRef<SeedCardItem> = computed((): SeedCardItem => {
  return props.item
})

const description: ComputedRef<string> = computed((): string => {
  return item.value.description
})

const imageUrl: ComputedRef<string> = computed((): string => {
  return item.value.imageUrl
})

const title: ComputedRef<string> = computed((): string => {
  return item.value.title
})
</script>

<template>
  <div class="seed-card">
    <img :src="imageUrl" alt="Seed card" height="75" width="75">
    <div class="info">
      <span class="bold" data-test="title">{{ title }}</span>
      <span data-test="description">{{ description }}</span>
    </div>
  </div>
</template>

<style scoped>
.seed-card {
  align-items: center;
  background: rgb(216, 216, 216);
  border: 1px solid rgb(189, 189, 189);
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.bold {
  font-weight: bold;
}

img {
  border-radius: 5px;
}
</style>