import { MutationTree } from 'vuex'
import { State } from '@/store/playlist/types'
import { Playlist } from '@/models/playlist'

export enum Types {
    SET_PLAYLISTS = 'setPlaylists'
}

export type Mutations<S = State> = {
    [Types.SET_PLAYLISTS](state: S, payload: Array<Playlist>): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_PLAYLISTS](state, payload: Array<Playlist>) {
        state.playlists = payload
    }
}