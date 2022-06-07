<template>
    <div class="filters">
        <div
            class="filter"
            v-for="filter in filters"
            :key="filter.key"
        >
            <div class="label">
                {{ keyToLabel(filter.key) }} {{ filter.value }}
            </div>
            <div class="input">
                <input
                    type="range"
                    class="form-control"
                    :max="filter.max"
                    :min="filter.min"
                    :step="filter.step"
                    v-model="filter.value"
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

export type Filter = {
    key: string,
    value: number | null,
    max: number
    min: number,
    step: number
}

export default defineComponent({
    props: {
        filters: {
            type: Object as PropType<Array<Filter>>,
            required: true
        }
    },
    methods: {
        keyToLabel(key: string): string {
            return key.charAt(0).toUpperCase() + key.slice(1)
        }
    }
})
</script>

<style scoped>
.filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>