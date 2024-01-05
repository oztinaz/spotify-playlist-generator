import SeedCard from "@/components/spotify/seed/SeedCard.vue";
import type { SeedCardItem } from "@/types/spotify/components/seed-card/Item";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe('components/spotify/seed/SeedCard', () => {
  const mockItem: SeedCardItem = {
    id: 'a',
    description: 'a',
    imageUrl: 'a',
    title: 'a'
  }
  
  const wrapper = shallowMount(SeedCard, {
    props: {
      item: mockItem
    }
  })
  
  test('checks image url', () => {
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(mockItem.imageUrl)
  })

  test('checks title', () => {
    const titleSpan = wrapper.find('[data-test="title"]')
    expect(titleSpan.text()).toBe(mockItem.title)
  })

  test('checks description', () => {
    const descriptionSpan = wrapper.find('[data-test="description"]')
    expect(descriptionSpan.text()).toBe(mockItem.description)
  })
})