<template>
    <div class="playlist">
        <div class="info" v-if="name !== null">
            <div class="label">Name</div>
            <div class="value">{{ name }}</div>
        </div>
        <div class="info" v-if="description !== null">
            <div class="label">Description</div>
            <div class="value">{{ description }}</div>
        </div>

        <div class="locks">
            <div class="lock">
                Public: 
                <i class="bi bi-unlock" v-if="isPublic"></i>
                <i class="bi bi-lock" v-else></i>
            </div>
            <div class="lock">
                Collaborative: 
                <i class="bi bi-unlock" v-if="isCollaborative"></i>
                <i class="bi bi-lock" v-else></i>
            </div>
        </div>
        <div class="tracks" v-if="tracks.length > 0">
            <div
                class="track"
                v-for="track in tracks"
                :key="track.getId()"
            >
                <img :src="getTrackImage(track)" height="80" width="80">
                <div>
                    <div>{{ track.getName() }}</div>
                    <div>by {{ artistsText(track.getAlbum().getArtists()) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'

export default defineComponent({
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ]),
        description(): string | null {
            return this.createdPlaylist.getDescription()
        },
        isCollaborative(): boolean {
            return this.createdPlaylist.isCollaborative()
        },
        isPublic(): boolean {
            return this.createdPlaylist.isPublic()
        },
        name(): string | null {
            return this.createdPlaylist.getName()
        },
        tracks(): Array<Track> {
            return this.createdPlaylist.getTracks()
        }
    },
    methods: {
        getTrackImage(track: Track): string {
            if (track.getAlbum() === null || (track.getAlbum() as Album).getImages().length === 0 || (track.getAlbum() as Album).getImages()[0].getUrl() === null) {
                return ''
            }
            return (track.getAlbum() as Album).getImages()[0].getUrl() as string
        },
        artistsText(artists: Array<Artist>): string {
            const a: Array<string> = []
            artists.map((artist: Artist) => {
                if (artist.getName() !== null) {
                    a.push(artist.getName() as string)
                }
            })
            return a.join(', ')
        },
    }
})
</script>

<style scoped>
.playlist {
    width: 100%;
}

.label {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 50px;
    background: rgb(243, 238, 238);
}

.value {
    display: flex;
    align-items: center;
    padding: 10px;
    min-height: 50px;
    background: rgb(250, 249, 249);
}

.locks {
    display: flex;
    gap: 20px;
}

.tracks {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.track {
    display: flex;
}
</style>