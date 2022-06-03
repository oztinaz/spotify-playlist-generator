<template>
    <div class="playlist-card">
        {{ playlist }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import { Playlist } from '@/models/playlist'

export default defineComponent({
    props: {
        playlist: {
            type: Object as PropType<Playlist>,
            required: true
        }
    }
})
</script>

<style scoped>
    
</style>