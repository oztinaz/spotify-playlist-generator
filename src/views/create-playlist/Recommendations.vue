<template>
    <div id="create-playlist-recommendations">
        <div class="top">
            <router-link
                type="button"
                class="btn btn-secondary"
                :to="{
                    name: 'CreatePlaylistForm'
                }"
            >Prev</router-link>
            <div class="buttons">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#recommendationsModal" @click="getRecs()">
                    Generate Recommendations
                </button>
                <button class="btn btn-success" @click="create()">Create</button>
            </div>
        </div>
        <Filters :filters="filters"/>
        <div class="seeds">
            <div class="seed">
                <input type="text" placeholder="Artist" class="form-control" v-model="artist">
                <div
                    class="searched-items"
                    v-if="searchedArtists.length > 0"
                >
                    <div
                        class="searched-item"
                        v-for="(artist, index) in searchedArtists"
                        :key="'searched_artist_' + index"
                        @click="addArtist(artist)"
                    >
                        <img :src="getArtistImage(artist)" height="80" width="80">
                        <div class="text-truncate">{{ artist.getName() }}</div>
                    </div>
                </div>
                <div
                    class="selected-items"
                    v-if="selectedArtists.length > 0"
                >
                    <div
                        class="selected-item"
                        v-for="(artist, index) in selectedArtists"
                        :key="'selected_artist_' + index"
                    >
                        <img :src="getArtistImage(artist)" height="80" width="80">
                        <div class="text-truncate">{{ artist.getName() }}</div>
                        <button class="btn btn-danger" @click="removeArtist(artist)">Remove</button>
                    </div>
                </div>
            </div>
            <div class="seed">
                <input type="text" placeholder="Track" class="form-control" v-model="track">
                <div
                    class="searched-items"
                    v-if="searchedTracks.length > 0"
                >
                    <div
                        class="searched-item"
                        v-for="(track, index) in searchedTracks"
                        :key="'searched_track_' + index"
                        @click="addTrack(track)"
                    >
                        <img :src="getTrackImage(track)" height="80" width="80">
                        <div class="text-truncate">{{ track.getName() }}</div>
                    </div>
                </div>
                <div
                    class="selected-items"
                    v-if="selectedTracks.length > 0"
                >
                    <div
                        class="selected-item"
                        v-for="(track, index) in selectedTracks"
                        :key="'selected_track_' + index"
                    >
                        <img :src="getTrackImage(track)" height="80" width="80">
                        <div class="text-truncate">{{ track.getName() }}</div>
                        <button class="btn btn-danger" @click="removeTrack(track)">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RecommendationsModal/>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapActions, mapMutations, mapState } from 'vuex'

// Components
import Filters, { Filter } from '@/components/create-playlist/recommendations/Filters.vue'
import RecommendationsModal from '@/components/create-playlist/recommendations/RecommendationsModal.vue'

// Models
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Seeds } from '@/models/seeds'
import { Track } from '@/models/track'

export default defineComponent({
    components: {
        Filters,
        RecommendationsModal
    },
    data() {
        return {
            filters: [
                {
                    key: 'acousticness',
                    value: null,
                    max: 1,
                    min: 0,
                    step: 0.1
                },
                {
                    key: 'danceability',
                    value: null,
                    max: 1,
                    min: 0,
                    step: 0.1
                },
                {
                    key: 'instrumentalness',
                    value: null,
                    max: 1,
                    min: 0,
                    step: 0.1
                },
                {
                    key: 'liveness',
                    value: null,
                    max: 1,
                    min: 0,
                    step: 0.1
                },
                {
                    key: 'popularity',
                    value: null,
                    max: 100,
                    min: 0,
                    step: 1
                },
                {
                    key: 'speechiness',
                    value: null,
                    max: 1,
                    min: 0,
                    step: 0.1
                },
            ] as Array<Filter>,
            seeds: new Seeds() as Seeds,
            artist: '' as string,
            track: '' as string
        }
    },
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ]),
        ...mapState('search', [
            'searchedItems'
        ]),
        searchedArtists(): Array<Artist> {
            if (this.searchedItems !== null) {
                return this.searchedItems.artists
            }

            return []
        },
        selectedArtists(): Array<Artist> {
            return this.seeds.getArtists()
        },
        searchedTracks(): Array<Track> {
            if (this.searchedItems !== null) {
                return this.searchedItems.tracks
            }

            return []
        },
        selectedTracks(): Array<Track> {
            return this.seeds.getTracks()
        },
        recommendationsFilters(): {[key: string]: number} {
            let filters: {[key: string]: any} = {}

            this.filters.map((filter: Filter) => {
                if (filter.value !== null) {
                    filters['target_' + filter.key] = filter.value
                }
            })

            return filters
        }
    },
    watch: {
        async artist(): Promise<void> {
            if (this.artist === '') {
                this.resetSearchedItems()
            } else {
                await this.searchItems({
                    q: this.artist,
                    type: 'artist'
                })
            }
        },
        async track(): Promise<void> {
            if (this.track === '') {
                this.resetSearchedItems()
            } else {
                await this.searchItems({
                    q: this.track,
                    type: 'track'
                })
            }
        }
    },
    methods: {
        ...mapActions('search', [
            'searchItems'
        ]),
        ...mapActions('playlist', [
            'createPlaylist',
            'addItemsToPlaylist'
        ]),
        ...mapActions('track', [
            'getRecommendations'
        ]),
        ...mapMutations('search', [
            'setSearchedItems'
        ]),
        async create(): Promise<void> {
            await this.createPlaylist('11165478693')

            const uris: Array<string> = []
            this.createdPlaylist.getTracks().map((track: Track) => {
                if (track.getUri() !== null) {
                    uris.push(track.getUri() as string)
                }
            })
            await this.addItemsToPlaylist(uris)
        },
        async getRecs(): Promise<void> {
            let filters = JSON.parse(JSON.stringify(this.recommendationsFilters))
            if (this.seeds.getArtists().length > 0) {
                const artists: Array<string> = []
                this.seeds.getArtists().map((artist: Artist) => {
                    if (artist.getId() !== null) {
                        artists.push(artist.getId() as string)
                    }
                })
                filters['seed_artists'] = artists.join(',')
            }
            if (this.seeds.getTracks().length > 0) {
                const tracks: Array<string> = []
                this.seeds.getTracks().map((track: Track) => {
                    if (track.getId() !== null) {
                        tracks.push(track.getId() as string)
                    }
                })
                filters['seed_tracks'] = tracks.join(',')
            }
            await this.getRecommendations(filters)
        },
        addArtist(artist: Artist): void {
            if (!this.seeds.isArtistIncluded(artist)) {
                this.seeds.addArtist(artist)
                this.artist = ''
            }
        },
        addTrack(track: Track): void {
            if (!this.seeds.isTrackIncluded(track)) {
                this.seeds.addTrack(track)
                this.track = ''
            }
        },
        getArtistImage(artist: Artist): string {
            if (artist.getImages().length === 0 || artist.getImages()[0].getUrl() === null) {
                return ''
            }
            return artist.getImages()[0].getUrl() as string
        },
        getTrackImage(track: Track): string {
            if (track.getAlbum() === null || (track.getAlbum() as Album).getImages().length === 0 || (track.getAlbum() as Album).getImages()[0].getUrl() === null) {
                return ''
            }
            return (track.getAlbum() as Album).getImages()[0].getUrl() as string
        },
        removeArtist(artist: Artist): void {
            if (this.seeds.isArtistIncluded(artist)) {
                this.seeds.removeArtist(artist)
            }
        },
        removeTrack(track: Track): void {
            if (this.seeds.isTrackIncluded(track)) {
                this.seeds.removeTrack(track)
            }
        },
        resetSearchedItems(): void {
            this.setSearchedItems({
                    albums: [],
                    artists: [],
                    tracks: []
                })
        }
    }
})
</script>

<style scoped>
#create-playlist-recommendations {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.top {
    display: flex;
    justify-content: space-between;
}

.buttons {
    display: flex;
    gap: 20px;
}

.searched-items {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.searched-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.searched-item:hover {
    background: rgb(201, 243, 239);
    cursor: pointer;
}

.selected-items {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.selected-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.seeds {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>