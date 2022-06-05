import { MutationTree } from 'vuex'
import { State } from '@/store/track/types'
import { Track } from '@/models/track'

export enum Types {
    SET_RECOMMENDATIONS = 'setRecommendations'
}

export type Mutations<S = State> = {
    [Types.SET_RECOMMENDATIONS](state: S, payload: Array<Track>): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_RECOMMENDATIONS](state, payload: Array<Track>) {
        state.recommendations = payload
    }
}