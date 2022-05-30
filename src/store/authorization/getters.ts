import { GetterTree } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/authorization/types'

type Getters = {
    isAuthorizable(state: State): boolean,
    accessTokenParams: (state: State) => (payload: string) => AccessTokenParams,
    refreshTokenParams: () => (payload: string) => RefreshTokenParams
}

export type AccessTokenParams = {
    code: string,
    redirect_uri: string | null,
    grant_type: string,
}

export type RefreshTokenParams = {
    refresh_token: string,
    grant_type: string,
}

export const getters: GetterTree<State, RootState> & Getters = {
    isAuthorizable: (state): boolean => {
        return state.clientId !== null &&
            state.clientId !== '' &&
            state.clientSecret !== null &&
            state.clientSecret !== '' &&
            state.responseType !== null &&
            state.responseType !== '' &&
            state.redirectUri !== null &&
            state.redirectUri !== '' &&
            state.state !== null &&
            state.state !== '' &&
            state.scope !== null &&
            state.scope !== '' &&
            state.authorizationUrl !== null &&
            state.authorizationUrl !== ''
    },
    headers: (state) => {
        return {
            'Authorization': 'Basic ' + btoa(state.clientId + ':' + state.clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    accessTokenParams: (state: State) => (payload: string): AccessTokenParams => {
        return {
            code: payload,
            redirect_uri: state.redirectUri,
            grant_type: 'authorization_code',
        }
    },
    refreshTokenParams: () => (payload: string): RefreshTokenParams => {
        return {
            refresh_token: payload,
            grant_type: 'refresh_token',
        }
    }
}