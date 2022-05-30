import { Module } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/authorization/types'

import { actions } from '@/store/authorization/actions'
import { getters } from '@/store/authorization/getters'
import { mutations } from '@/store/authorization/mutations'

const authorization: Module<State, RootState> = {
    namespaced: true,
    state: {
        clientId: null,
        clientSecret: null,
        responseType: null,
        redirectUri: null,
        state: null,
        scope: null,
        authorizationUrl: null,
        accessToken: null
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default authorization