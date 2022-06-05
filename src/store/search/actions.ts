import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/search/types'
import { Mutations, Types as MutationTypes } from '@/store/search/mutations'

import axios from 'axios'

import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyTrack } from '@/types/spotify-track'
import { Track } from '@/models/track'
import { TrackMapper } from '@/mappers/track'
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { ArtistMapper } from '@/mappers/artist'
import { AlbumMapper } from '@/mappers/album'

export enum ActionTypes {
    SEARCH_ITEMS = 'searchItems'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.SEARCH_ITEMS](
        { commit }: AugmentedActionContext,
        payload: {
            q: string,
            type: string,
            limit: number
        }
    ): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.SEARCH_ITEMS]({ commit, rootState }, payload) {
        await axios.get(
            'https://api.spotify.com/v1/search',
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                },
                params: payload
            }
        ).then((resp: { data: { albums?: { items: Array<SpotifyAlbum> }, artists?: { items: Array<SpotifyArtist> }, tracks?: { items: Array<SpotifyTrack> } } }) => {
            const albums: Array<Album> = []
            resp.data.albums?.items.forEach((album: SpotifyAlbum) => {
                albums.push(AlbumMapper.spotifyAlbumToAlbum(album))
            })
            const artists: Array<Artist> = []
            resp.data.artists?.items.forEach((artist: SpotifyArtist) => {
                artists.push(ArtistMapper.spotifyArtistToArtist(artist))
            })
            const tracks: Array<Track> = []
            resp.data.tracks?.items.forEach((track: SpotifyTrack) => {
                tracks.push(TrackMapper.spotifyTrackToTrack(track))
            })
            commit(MutationTypes.SET_SEARCHED_ITEMS, {
                albums: albums,
                artists: artists,
                tracks: tracks
            })
        })
    }
}