import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/genre/types'
import { Mutations, Types as MutationTypes } from '@/store/genre/mutations'

import axios from 'axios'

export enum ActionTypes {
    GET_GENRES = 'getGenres'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.GET_GENRES](
        { commit }: AugmentedActionContext
    ): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.GET_GENRES]({ commit, rootState }) {
        await axios.get(
            'https://api.spotify.com/v1/recommendations/available-genre-seeds',
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                }
            }
        ).then((resp: { data: { genres: Array<string> }}) => {
            commit(MutationTypes.SET_GENRES, resp.data.genres)
        })
    }
}