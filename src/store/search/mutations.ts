import { MutationTree } from 'vuex'
import { State, SearchedItems } from '@/store/search/types'

export enum Types {
    SET_SEARCHED_ITEMS = 'setSearchedItems'
}

export type Mutations<S = State> = {
    [Types.SET_SEARCHED_ITEMS](state: S, payload: SearchedItems | null): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_SEARCHED_ITEMS](state, payload: SearchedItems | null) {
        state.searchedItems = payload
    }
}