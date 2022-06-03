import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/authorization/types'
import { Mutations, Types as MutationTypes } from '@/store/authorization/mutations'

import axios from 'axios'
import { TokenMapper } from '@/mappers/token'
import { SpotifyToken } from '@/types/spotify-token'
import { AccessToken } from '@/models/access-token'
import { AccessTokenParams, RefreshTokenParams } from './getters'

export enum ActionTypes {
    GET_ACCESS_TOKEN = 'getAccessToken',
    REFRESH_TOKEN = 'refreshToken',
    REQUEST_TOKEN = 'requestToken',
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.GET_ACCESS_TOKEN](
        { commit }: AugmentedActionContext,
        payload: string
    ): Promise<void>,
    [ActionTypes.REFRESH_TOKEN](
        { commit }: AugmentedActionContext,
        payload: string
    ): Promise<void>,
    [ActionTypes.REQUEST_TOKEN](
        { commit }: AugmentedActionContext,
        payload: AccessTokenParams | RefreshTokenParams
    ): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.GET_ACCESS_TOKEN]({ dispatch, getters }, payload) {
        await dispatch(ActionTypes.REQUEST_TOKEN, getters.accessTokenParams(payload))
    },
    async [ActionTypes.REFRESH_TOKEN]({ dispatch, getters }, payload) {
        await dispatch(ActionTypes.REQUEST_TOKEN, getters.refreshTokenParams(payload))
    },
    async [ActionTypes.REQUEST_TOKEN]({ commit, getters }, payload) {
        await axios.post(
            'https://accounts.spotify.com/api/token',
            null,
            {
                headers: getters.headers,
                params: payload
            }   
        ).then((resp: { data: SpotifyToken }) => {
            const accessToken: AccessToken | null = TokenMapper.spotifyTokenToAccessToken(resp.data)
            
            commit(MutationTypes.SET_ACCESS_TOKEN, accessToken)
            if (accessToken !== null) {
                localStorage.setItem('accessToken', accessToken.toString())
            }
            
        }).catch((err: any) => {
            console.error(err)
        })
    }
}