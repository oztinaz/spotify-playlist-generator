<template>
    <div class="image">
        <img :src="src" :height="height" :width="width">
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import { Album } from '@/models/album'

export default defineComponent({
    props: {
        album: {
            type: Object as PropType<Album>,
            required: true
        }
    },
    data() {
        return {
            height: 150,
            width: 150
        }
    },
    computed: {
        src(): string | null {
            return this.album.getImages()[0].getUrl()
        }
    }
})
</script>

<style scoped>

</style>