<template>
    <div id="playlists">
        <Cassette
            v-for="playlist in playlists"
            :key="playlist.getId()"
            :playlist="playlist"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

import Cassette from '@/components/cassette/Main.vue'

export default defineComponent({
    components: {
        Cassette
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
#playlists {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
</style>