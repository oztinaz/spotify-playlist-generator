import { createStore } from 'vuex'

import { State } from '@/store/types'

// modules
import authorization from '@/store/authorization'
import genre from '@/store/genre'
import playlist from '@/store/playlist'
import search from '@/store/search'
import track from '@/store/track'

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
        genre,
        playlist,
        search,
        track
    }
})
