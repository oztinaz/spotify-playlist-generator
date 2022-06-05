import { MutationTree } from 'vuex'
import { State } from '@/store/genre/types'

export enum Types {
    SET_GENRES = 'setGenres'
}

export type Mutations<S = State> = {
    [Types.SET_GENRES](state: S, payload: Array<string>): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_GENRES](state, payload: Array<string>) {
        state.genres = payload
    }
}