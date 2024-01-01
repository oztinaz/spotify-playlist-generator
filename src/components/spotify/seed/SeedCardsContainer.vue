<script setup lang="ts">
import SeedCard from '@/components/spotify/seed/SeedCard.vue';

import { computed, type ComputedRef, type StyleValue } from 'vue';
import type { SeedCardItem } from '@/types/spotify/components/seed-card/Item';

const props = withDefaults(defineProps<{
  items: SeedCardItem[],
  maxHeight?: number
}>(), {
  maxHeight: 0
})

const items: ComputedRef<SeedCardItem[]> = computed((): SeedCardItem[] => {
  return props.items
})

const maxHeight: ComputedRef<number> = computed((): number => {
  return props.maxHeight
})

const style: ComputedRef<StyleValue> = computed((): StyleValue => {
  if (maxHeight.value === 0) {
    return {}
  }
  
  return {
    maxHeight: `${maxHeight.value}px`,
    overflowY: 'auto'
  }
})
</script>

<template>
  <div class="seed-cards-container" :style="style">
    <SeedCard v-for="item in items" :item="item" :key="item.id" data-test="seed-card"/>
  </div>
</template>

<style scoped>
.seed-cards-container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
}
</style>