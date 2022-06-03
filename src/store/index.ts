import { createStore } from 'vuex'

import { State } from '@/store/types'

// modules
import authorization from '@/store/authorization'
import playlist from '@/store/playlist'

export default createStore<State>({
    state: {
    } as State,
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        authorization,
        playlist
    }
})
