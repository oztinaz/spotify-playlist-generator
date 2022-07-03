<template>
    <div class="playlist">
        <div class="name" v-if="name !== null">
            {{ name }}
        </div>
        <div class="description" v-if="description !== null">
            {{ description }}
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
            <div class="tracks-text">
                {{ tracks.length }} Songs
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="track in tracks"
                        :key="track.getId()"
                    >
                        <td :title="track.getName()" class="text-truncate">{{ track.getName() }}</td>
                        <td :title="artistsText(track.getAlbum().getArtists())" class="text-truncate">{{ artistsText(track.getAlbum().getArtists()) }}</td>
                        <td :title="track.getAlbum().getName()" class="text-truncate">{{ track.getAlbum().getName() }}</td>
                        <td :title="track.getAlbum().getReleaseDate()" class="text-truncate">{{ getReleaseDateString(track.getAlbum().getReleaseDate())}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'
import { defineComponent } from '@vue/runtime-core'
import { mapState } from 'vuex'
import DatetimeUtils from '@/utils/datetime'

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
        getReleaseDateString(releaseDate: Date): string {
            return DatetimeUtils.toString(releaseDate)
        },
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
    height: 100vh;
}

.name {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 70px;
    font-size: 42px;
}

.description {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    min-height: 50px;
}

.locks {
    display: flex;
    gap: 20px;
    padding: 10px 20px;
}

.tracks {
    padding: 10px 20px;
}

.test {
    background: rgb(29, 29, 29);
}

.test1 {
    background: rgb(37, 37, 37);
}

table {
    table-layout: fixed
}
</style>