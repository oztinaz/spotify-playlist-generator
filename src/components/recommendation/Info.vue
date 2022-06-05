<template>
    <div class="info">
        <div class="name">{{ name }}</div>
        <div class="artist">by {{ artistsText }}</div>
        <div class="album">{{ albumName }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'

export default defineComponent({
    props: {
        track: {
            type: Object as PropType<Track>,
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
        albumName(): string {
            return this.album.getName()
        },
        album(): Album {
            return this.track.getAlbum()
        },
        artistsText(): string {
            const artists: Array<string> = []
            this.artists.map((artist: Artist) => {
                artists.push(artist.getName())
            })
            return artists.join(', ')
        },
        artists(): Array<Artist> {
            return this.track.getArtists()
        },
        name(): string {
            return this.track.getName()
        }
    }
})
</script>

<style scoped>
.row {
    display: flex;
}
</style>