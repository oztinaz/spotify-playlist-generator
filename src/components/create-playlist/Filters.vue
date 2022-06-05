<template>
    <div class="filters">
        <div
            v-for="filter in filters"
            :key="filter.key"
        >
            <div>{{ keyToLabel(filter) }}: {{ filter.value }}</div>
            <div>
                <input
                    type="range"
                    class="form-range"
                    v-model="filter.value"
                    :min="filter.min"
                    :max="filter.max"
                    :step="filter.step"
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
    min: number | null,
    max: number | null,
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
        keyToLabel(filter: Filter): string {
            return filter.key.charAt(0).toUpperCase() + filter.key.slice(1)
        }
    }
})  
</script>

<style scoped>
.filters {
    width: 100%;
}
</style>