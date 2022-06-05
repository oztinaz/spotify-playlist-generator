import { Module } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/search/types'

import { actions } from '@/store/search/actions'
// import { getters } from '@/store/track/getters'
import { mutations } from '@/store/search/mutations'

const track: Module<State, RootState> = {
    namespaced: true,
    state: {
        searchedItems: null
    },
    // getters: getters,
    mutations: mutations,
    actions: actions
}

export default track