import { Module } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/genre/types'

import { actions } from '@/store/genre/actions'
// import { getters } from '@/store/track/getters'
import { mutations } from '@/store/genre/mutations'

const track: Module<State, RootState> = {
    namespaced: true,
    state: {
        genres: []
    },
    // getters: getters,
    mutations: mutations,
    actions: actions
}

export default track