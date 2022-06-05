import { Module } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/track/types'

import { actions } from '@/store/track/actions'
// import { getters } from '@/store/track/getters'
import { mutations } from '@/store/track/mutations'

const track: Module<State, RootState> = {
    namespaced: true,
    state: {
        recommendations: []
    },
    // getters: getters,
    mutations: mutations,
    actions: actions
}

export default track