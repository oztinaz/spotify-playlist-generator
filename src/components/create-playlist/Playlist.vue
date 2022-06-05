<template>
    <div class="display-playlist">
        <div class="name">
            <div class="label">Name</div>
            <div class="value">{{ playlist.getName() }}</div>
        </div>
        <div class="description">
            <div class="label">Description</div>
            <div class="value">{{ playlist.getDescription() }}</div>
        </div>
        <div class="tracks">
            <div
                class="track"
                v-for="track in playlist.getTracks()"
                :key="track.getId()"
            >
                <div><img :src="track.getAlbum().getImages()[0].getUrl()" alt="" height="60" width="60"></div>
                <div>{{ track.getName() }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Playlist } from '@/models/playlist'
import { defineComponent, PropType } from '@vue/runtime-core'

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
.display-playlist {
    width: 100vh;
}

.name {
    display: flex;
}

.description {
    display: flex;
}

.label {
    width: 100px;
}

.track {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>