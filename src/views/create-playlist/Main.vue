<template>
    <div id="create-playlist-main">
        <div class="router-view-container">
            <router-view/>
        </div>
        <DisplayPlaylist/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'

// Components
import DisplayPlaylist from '@/components/create-playlist/Playlist.vue'

export default defineComponent({
    components: {
        DisplayPlaylist
    },
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ]),
        isNameNull(): boolean {
            return this.createdPlaylist.getName() === null
        }
    },
    mounted() {
        if (this.isNameNull) {
            this.$router.push({
                name: 'CreatePlaylistForm'
            })
        }
    }
})
</script>

<style scoped>
#create-playlist-main {
    display: flex;
    gap: 10px;
}

.router-view-container {
    width: 100%;
    padding: 10px 0 0 10px;
}
</style>