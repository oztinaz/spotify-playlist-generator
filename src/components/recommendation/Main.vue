<template>
    <div class="recommendation">
        <Image :album="album"/>
        <Info :track="recommendation"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import Image from '@/components/recommendation/Image.vue'
import Info from '@/components/recommendation/Info.vue'

import { Track } from '@/models/track'

export default defineComponent({
    components: {
        Image,
        Info
    },
    props: {
        recommendation: {
            type: Object as PropType<Track>,
            required: true
        }
    },
    computed: {
        album() {
            return this.recommendation.getAlbum()
        }
    }
})
</script>

<style scoped>
.recommendation {
    display: flex;
    gap: 10px;

    height: 152px;
    width: 100%;
    border: 1px solid rgb(167, 167, 167);
}
</style>