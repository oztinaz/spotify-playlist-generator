import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/playlist/types'
import { Mutations, Types as MutationTypes } from '@/store/playlist/mutations'

import axios from 'axios'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import { Playlist } from '@/models/playlist'
import { PlaylistMapper } from '@/mappers/playlist'

export enum ActionTypes {
    GET_PLAYLISTS = 'getPlaylists',
    CREATE_PLAYLIST = 'createPlaylist',
    ADD_ITEMS_TO_PLAYLIST = 'addItemsToPlaylist'
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
    [ActionTypes.CREATE_PLAYLIST](
        { commit }: AugmentedActionContext,
        payload: {
            userId: string,
            playlist: Playlist
        }
    ): Promise<void>
    [ActionTypes.ADD_ITEMS_TO_PLAYLIST](
        { commit }: AugmentedActionContext,
        payload: Array<string>
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
        })
    },
    async [ActionTypes.CREATE_PLAYLIST]({ commit, rootState }, payload) {
        await axios.post(
            'https://api.spotify.com/v1/users/' + payload.userId +'/playlists',
            {
                name: payload.playlist.getName(),
                public: payload.playlist.isPublic(),
                collaborative: payload.playlist.isCollaborative(),
                description: payload.playlist.getDescription()
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                }
            }
        ).then((resp: { data: SpotifyPlaylist }) => {
            commit(MutationTypes.SET_CREATED_PLAYLIST, PlaylistMapper.spotifyPlaylistToPlaylist(resp.data))
        })
    },
    async [ActionTypes.ADD_ITEMS_TO_PLAYLIST]({ commit, rootState, state }, payload) {
        await axios.post(
            'https://api.spotify.com/v1/playlists/' + state.createdPlaylist?.getId() +'/tracks',
            {
                uris: payload
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                }
            }
        ).then(() => {
            console.log('OK')
        })
    }
}