import { Module } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/playlist/types'

import { actions } from '@/store/playlist/actions'
// import { getters } from '@/store/authorization/getters'
import { mutations } from '@/store/playlist/mutations'

import { Playlist } from '@/models/playlist'

const playlist: Module<State, RootState> = {
    namespaced: true,
    state: {
        playlists: [],
        createdPlaylist: new Playlist()
    },
    // getters: getters,
    mutations: mutations,
    actions: actions
}

export default playlist