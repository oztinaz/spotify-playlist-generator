import SearchInput from "@/components/spotify/seed/SearchInput.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import { useSpotifyRecommendationSeedIndexStore } from "@/stores/spotify/recommendation/seed";

describe('components/spotify/seed/SearchInput', () => {
  const wrapper = shallowMount(SearchInput, {
    global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn
      })],
    },
  })
  
  test('checks query value', async () => {
    const input = wrapper.find('[data-test="search-input"]')
    const store = useSpotifyRecommendationSeedIndexStore()

    const mockValue = 'some text'
    await input.setValue(mockValue)
    expect(store.query).toBe(mockValue)
  })
})