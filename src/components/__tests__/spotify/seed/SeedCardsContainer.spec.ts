import SeedCardsContainer from "@/components/spotify/seed/SeedCardsContainer.vue";
import type { SeedCardItem } from "@/types/spotify/components/seed-card/Item";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe('components/spotify/seed/SeedCardsContainer', () => {
  const mockItems: SeedCardItem[] = [
    {
      id: 'a',
      description: 'a',
      imageUrl: 'a',
      title: 'a'
    }
  ]
  
  test('checks SeedCard components', () => {
    const wrapper = shallowMount(SeedCardsContainer, {
      props: {
        items: mockItems
      }
    })
    const all = wrapper.findAll('[data-test="seed-card"]')
    expect(all).toHaveLength(mockItems.length)
  })

  test('style returns an empty object when maxHeight props not set', () => {
    const wrapper = shallowMount(SeedCardsContainer, {
      props: {
        items: mockItems
      }
    })
    expect(wrapper.vm.style).toStrictEqual({})
  })

  test('style returns a proper object when maxHeight props set', () => {
    const maxHeight = 100
    const wrapper = shallowMount(SeedCardsContainer, {
      props: {
        items: mockItems,
        maxHeight: maxHeight
      }
    })
    expect(wrapper.vm.style).toStrictEqual({
      maxHeight: `${maxHeight}px`,
      overflowY: 'auto'
    })
  })
})