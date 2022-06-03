import { MutationTree } from 'vuex'
import { State } from '@/store/authorization/types'
import { AccessToken } from '@/models/access-token'

export enum Types {
    SET_CLIENT_ID = 'setClientId',
    SET_CLIENT_SECRET = 'setClientSecret',
    SET_RESPONSE_TYPE = 'setResponseType',
    SET_REDIRECT_URI = 'setRedirectUri',
    SET_STATE = 'setState',
    SET_SCOPE = 'setScope',
    SET_AUTHORIZATION_URL = 'setAuthorizationUrl',
    SET_ACCESS_TOKEN = 'setAccessToken'
}

export type Mutations<S = State> = {
    [Types.SET_CLIENT_ID](state: S, payload: string | null): void,
    [Types.SET_CLIENT_SECRET](state: S, payload: string | null): void,
    [Types.SET_RESPONSE_TYPE](state: S, payload: string | null): void,
    [Types.SET_REDIRECT_URI](state: S, payload: string | null): void,
    [Types.SET_STATE](state: S, payload: string | null): void,
    [Types.SET_SCOPE](state: S, payload: string | null): void,
    [Types.SET_AUTHORIZATION_URL](state: S, payload: string | null): void,
    [Types.SET_ACCESS_TOKEN](state: S, payload: AccessToken | null): void
}

export const mutations: MutationTree<State> & Mutations = {
    [Types.SET_CLIENT_ID](state, payload: string | null) {
        state.clientId = payload
    },
    [Types.SET_CLIENT_SECRET](state, payload: string | null) {
        state.clientSecret = payload
    },
    [Types.SET_RESPONSE_TYPE](state, payload: string | null) {
        state.responseType = payload
    },
    [Types.SET_REDIRECT_URI](state, payload: string | null) {
        state.redirectUri = payload
    },
    [Types.SET_STATE](state, payload: string | null) {
        state.state = payload
    },
    [Types.SET_SCOPE](state, payload: string | null) {
        state.scope = payload
    },
    [Types.SET_AUTHORIZATION_URL](state, payload: string | null) {
        state.authorizationUrl = payload
    },
    [Types.SET_ACCESS_TOKEN](state, payload: AccessToken | null) {
        state.accessToken = payload
    }
}