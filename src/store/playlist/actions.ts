import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/playlist/types'
import { Mutations, Types as MutationTypes } from '@/store/playlist/mutations'

import axios from 'axios'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import { Playlist } from '@/models/playlist'
import { PlaylistMapper } from '@/mappers/playlist'

export enum ActionTypes {
    GET_PLAYLISTS = 'getPlaylists'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.GET_PLAYLISTS](
        { commit }: AugmentedActionContext
    ): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.GET_PLAYLISTS]({ commit, rootState }) {
        await axios.get(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                }
            }
        ).then((resp: { data: { items: Array<SpotifyPlaylist> } }) => {
            const playlists: Array<Playlist> = []
            resp.data.items.forEach((item: SpotifyPlaylist) => {
                playlists.push(PlaylistMapper.spotifyPlaylistToPlaylist(item))
            })
            commit(MutationTypes.SET_PLAYLISTS, playlists)
        }).catch(err => {
            console.error(err)
        })
    }
}