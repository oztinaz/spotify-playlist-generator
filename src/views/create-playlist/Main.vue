
<template>
    <div id="create-playlist">
        <div class="creation">
            <div class="form">
                <div class="inputs">
                    <input type="text" placeholder="Name" class="form-control" v-model="name">
                    <textarea placeholder="Description" class="form-control" rows="3" v-model="description"></textarea>
                </div>
                <div class="selections">
                    <div class="selection">
                        <div class="label">Public</div>
                        <select class="form-control" v-model="publicity">
                            <option :value="true">Yes</option>
                            <option :value="false">No</option>
                        </select>
                    </div>
                    <div class="selection">
                        <div class="label">Collaborative</div>
                        <select class="form-control" v-model="collaborative">
                            <option :value="true">Yes</option>
                            <option :value="false">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <Filters :filters="filters"/>
                <Seeds :seed="seed"/>
            </div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#recommendationsModal" @click="generateRecommendations()">
                generate
            </button>
        </div>
        <div class="display">
            <DisplayPlaylist :playlist="playlist"/>
            <button class="btn btn-success" @click="final()">Create</button>
        </div>
    </div>
    <RecommendationsModal
        :recommendations="recommendations"
        :playlist="playlist"
    />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

import Filters from '@/components/create-playlist/Filters.vue'
import RecommendationsModal from '@/components/create-playlist/RecommendationsModal.vue'
import Seeds from '@/components/create-playlist/Seeds.vue'
import DisplayPlaylist from '@/components/create-playlist/Playlist.vue'

import { Playlist } from '@/models/playlist'
import { Filter } from '@/components/create-playlist/Filters.vue'
import { Seed } from '@/models/seed'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'
import { PlaylistFactory } from '@/factories/playlist'

export default defineComponent({
    components: {
        Filters,
        DisplayPlaylist,
        RecommendationsModal,
        Seeds
    },
    data() {
        return {
            playlist: new Playlist(),
            seed: new Seed(),
            name: '' as string,
            collaborative: false as boolean,
            description: '' as string,
            publicity: false as boolean,
            filters: [
                {
                    key: 'acousticness',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                },
                {
                    key: 'danceability',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                },
                {
                    key: 'energy',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                },
                {
                    key: 'instrumentalness',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                },
                {
                    key: 'liveness',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                },
                {
                    key: 'loudness',
                    value: null,
                    min: -60,
                    max: 0,
                    step: 1
                },
                {
                    key: 'popularity',
                    value: null,
                    min: 0,
                    max: 100,
                    step: 1
                },
                {
                    key: 'speechiness',
                    value: null,
                    min: 0,
                    max: 1,
                    step: 0.1
                }
            ] as Array<Filter>,
        }
    },
    computed: {
        ...mapState('playlist', [
            'createdPlaylist'
        ]),
        ...mapState('track', [
            'recommendations'
        ]),
        notNullFilters(): {[key: string]: number} {
            let f: {[key: string]: number} = {}
            this.filters.map((filter: Filter) => {
                if (filter.value !== null) {
                    f['target_' + filter.key] = parseFloat(filter.value.toString())
                }
            })

            return f
        },
        seedArtists(): string {
            const uris: Array<string> = []
            this.seed.getArtists().map((artist: Artist) => {
                if (artist.getId() !== null) {
                    uris.push(artist.getId() as string)
                }
            })
            return uris.join(',')
        },
        seedGenres(): string {
            const uris: Array<string> = []
            this.seed.getGenres().map((genre: string) => {
                uris.push(genre)
            })
            return uris.join(',')
        },
        seedTracks(): string {
            const uris: Array<string> = []
            this.seed.getTracks().map((track: Track) => {
                if (track.getId() !== null) {
                    uris.push(track.getId() as string)
                }
            })
            return uris.join(',')
        }
    },
    watch: {
        name(): void {
            this.playlist.setName(this.name)
        },
        description(): void {
            this.playlist.setDescription(this.description)
        }
    },
    methods: {
        ...mapActions('playlist', [
            'addItemsToPlaylist',
            'createPlaylist'
        ]),
        ...mapActions('track', [
            'getRecommendations'
        ]),
        async final() {
            await this.create()
            await this.addItems()
        },
        async generateRecommendations() {
            let filters: {[key: string]: any} = JSON.parse(JSON.stringify(this.notNullFilters))
            if (this.seedArtists !== '') {
                filters.seed_artists = this.seedArtists
            }
            if (this.seedGenres !== '') {
                filters.seed_genres = this.seedGenres
            }
            if (this.seedTracks !== '') {
                filters.seed_tracks = this.seedTracks
            }

            await this.getRecommendations(filters)
        },
        async create(): Promise<void> {
            await this.createPlaylist({
                userId: '11165478693',
                playlist: PlaylistFactory.create('', this.collaborative, this.description, [], this.name, this.publicity, 0, [])
            })
        },
        async addItems(): Promise<void> {
            const uris: Array<string> = []
            this.playlist.getTracks().map((track: Track) => {
                if (track.getUri() !== null) {
                    uris.push(track.getUri() as string)
                }
            })
            await this.addItemsToPlaylist(uris)
        }
    }
})  
</script>

<style scoped>
#create-playlist {
    display: flex;
}

.creation {
    display: flex;
    flex-direction: column;
    width: 100vh;
}

.form {
    display: flex;
    gap: 20px;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.selections {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.selection {
    display: flex;
    gap: 20px;
}

.label {
    display: flex;
    align-items: center;
    width: 150px;
}

.bottom {
    display: grid;
    grid-template-columns: 1fr 700px;
    gap: 20px;
    width: 100vh;
}
</style>