<template>
    <div id="playlists">
        <div class="ddd"
                v-for="playlist in playlists"
                :key="playlist.getId()"
            >
            <Cassette
                :playlist="playlist"/>
            <Cover :playlist="playlist"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

import Cassette from '@/components/cassette/Main.vue'
import Cover from '@/components/cassette/Cover.vue'
// import Cassette from '@/components/cassette/Main.vue'

export default defineComponent({
    components: {
        Cassette,
        Cover
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
    gap: 10px 50px;
}

.ddd {
    display: flex;
    gap: 10px;
    padding: 80px 20px;
}
</style>