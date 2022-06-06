<template>
    <div class="seeds">
        <div class="seed">
            <input type="text" placeholder="Track" class="form-control seed-input" v-model="track">
            <div class="search-items" v-if="searchedTracks.length > 0">
                <div
                    class="search-item"
                    v-for="track in searchedTracks"
                    :key="track.getId()"
                    @click="addTrack(track)"
                >
                    <img :src="track.getAlbum().getImages()[0].getUrl()" height="60" width="60">
                    <div>{{ track.getName() }}</div>
                </div>
            </div>
            <div class="selected-items" v-if="seed.getTracks().length > 0">
                <div
                    class="selected-item"
                    v-for="track in seed.getTracks()"
                    :key="track.getId()"
                >
                    <img :src="track.getAlbum().getImages()[0].getUrl()" height="60" width="60">
                    <div>{{ track.getName() }}</div>
                    <div class="remove" @click="removeTrack(track)">x</div>
                </div>
            </div>
        </div>
        <div class="seed">
            <input type="text" placeholder="Artist" class="form-control seed-input" v-model="artist">
            <div class="search-items" v-if="searchedArtists.length > 0">
                <div
                    class="search-item"
                    v-for="artist in searchedArtists"
                    :key="artist.getId()"
                    @click="addArtist(artist)"
                >
                    <img :src="artist.getImages()[0].getUrl()" height="60" width="60">
                    <div>{{ artist.getName() }}</div>
                </div>
            </div>
            <div class="selected-items" v-if="seed.getArtists().length > 0">
                <div
                    class="selected-item"
                    v-for="artist in seed.getArtists()"
                    :key="artist.getId()"
                >
                    <img :src="artist.getImages()[0].getUrl()" height="60" width="60">
                    <div>{{ artist.getName() }}</div>
                    <div class="remove" @click="removeArtist(artist)">x</div>
                </div>
            </div>
        </div>
        <div class="seed">
            <select class="form-control seed-input" v-model="genre" @click="addGenre(genre)">
                <option value="Genre" disabled>Genre</option>
                <option
                    v-for="g in genres"
                    :key="g"
                    :value="g"
                >{{ g }}</option>
            </select>
            <div class="selected-items" v-if="seed.getGenres().length > 0">
                <div
                    class="selected-item"
                    v-for="genre in seed.getGenres()"
                    :key="genre"
                >
                    <div>{{ genre }}</div>
                    <div class="remove" @click="removeGenre(genre)">x</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Artist } from '@/models/artist'
import { Seed } from '@/models/seed'
import { Track } from '@/models/track'
import { defineComponent, PropType } from '@vue/runtime-core'
import { mapActions, mapMutations, mapState } from 'vuex'

export default defineComponent({
    props: {
        seed: {
            type: Object as PropType<Seed>,
            required: true
        }
    },
    data() {
        return {
            artist: '' as string,
            genre: 'Genre' as string,
            track: '' as string
        }
    },
    computed: {
        ...mapState('genre', [
            'genres'
        ]),
        ...mapState('search', [
            'searchedItems'
        ]),
        availableGenres(): Array<string> {
            const genres: Array<string> = []
            this.genres.map((genre: string) => {
                if (!this.seed.isGenreIncluded(genre)) {
                    genres.push(genre)
                }
            })
            return genres
        },
        searchedArtists(): Array<Artist> {
            if (this.searchedItems !== null && 'artists' in this.searchedItems) {
                return this.searchedItems.artists
            }
            return []
        },
        searchedTracks(): Array<Track> {
            if (this.searchedItems !== null && 'tracks' in this.searchedItems) {
                return this.searchedItems.tracks
            }
            return []
        }
    },
    watch: {
        async artist(): Promise<void> {
            if (this.artist === '') {
                this.setSearchedItems(null)
            } else {
                await this.searchArtists(this.artist)
            }
        },
        async track(): Promise<void> {
            if (this.track === '') {
                this.setSearchedItems(null)
            } else {
                await this.searchTracks(this.track)
            }
        },
    },
    async mounted() {
        await this.getGenres()
    },
    methods: {
        ...mapActions('genre', [
            'getGenres'
        ]),
        ...mapActions('search', [
            'searchItems'
        ]),
        ...mapMutations('search', [
            'setSearchedItems'
        ]),
        async searchArtists(query: string): Promise<void> {
            await this.searchItems({
                q: query,
                type: 'artist',
                limit: 5
            })
        },
        async searchTracks(query: string): Promise<void> {
            await this.searchItems({
                q: query,
                type: 'track',
                limit: 5
            })
        },
        addArtist(artist: Artist): void {
            if (!this.seed.isArtistIncluded(artist)) {
                this.seed.addArtist(artist)
                this.artist = ''
                this.setSearchedItems(null)
            }
        },
        removeArtist(artist: Artist): void {
            this.seed.removeArtist(artist)
        },
        addGenre(genre: string): void {
            if (!this.seed.isGenreIncluded(genre) && genre !== 'Genre') {
                this.seed.addGenre(genre)
                this.genre = 'Genre'
            }
        },
        removeGenre(genre: string): void {
           this.seed.removeGenre(genre)
        },
        addTrack(track: Track): void {
            if (!this.seed.isTrackIncluded(track)) {
                this.seed.addTrack(track)
                this.track = ''
                this.setSearchedItems(null)
            }
        },
        removeTrack(track: Track): void {
            this.seed.removeTrack(track)
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
.seeds {
    display: flex;
    gap: 20px;
}

.seed-input {
    width: 220px;
}

.search-items {
    display: flex;
    flex-direction: column;
    width: 220px;
}

.search-item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 220px;
    overflow-wrap: break-word;
}

.selected-items {
    display: flex;
    flex-direction: column;
    width: 220px;
}

.selected-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 80px;
    width: 220px;
    overflow-wrap: break-word;
}

.remove {
    font-weight: bold;
    color: rgb(252, 59, 59);
}
</style>