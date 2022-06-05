import { MutationTree } from 'vuex'
import { State } from '@/store/playlist/types'
import { Playlist } from '@/models/playlist'

export enum Types {
    SET_PLAYLISTS = 'setPlaylists',
    SET_CREATED_PLAYLIST = 'setCreatedPlaylist'
}

export type Mutations<S = State> = {
    [Types.SET_PLAYLISTS](state: S, payload: Array<Playlist>): void,
    [Types.SET_CREATED_PLAYLIST](state: S, payload: Playlist): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_PLAYLISTS](state, payload: Array<Playlist>) {
        state.playlists = payload
    },
    [Types.SET_CREATED_PLAYLIST](state, payload: Playlist) {
        state.createdPlaylist = payload
    }
}