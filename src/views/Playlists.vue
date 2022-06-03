<template>
    <div id="playlists">
        <PlaylistCard
            v-for="playlist in playlists"
            :key="playlist.getId()"
            :playlist="playlist"
        />
    </div>
</template>

<script lang="ts">
import PlaylistCard from '@/components/PlaylistCard.vue'
import { defineComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
    components: {
        PlaylistCard
    },
    computed: {
        ...mapState('playlist', [
            'playlists'
        ])
    },
    async mounted() {
        await this.getPlaylists()
    },
    methods: {
        ...mapActions('playlist', [
            'getPlaylists'
        ])
    }
})
</script>

<style scoped>
    
</style>