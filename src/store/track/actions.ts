import { ActionTree, ActionContext } from 'vuex'

import { State as RootState } from '@/store/types'
import { State } from '@/store/track/types'
import { Mutations, Types as MutationTypes } from '@/store/track/mutations'

import axios from 'axios'

import { Track } from '@/models/track'
import { TrackMapper } from '@/mappers/track'
import { SpotifyTrack } from '@/types/spotify-track'

export enum ActionTypes {
    GET_RECOMMENDATIONS = 'getRecommendations'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
    [ActionTypes.GET_RECOMMENDATIONS](
        { commit }: AugmentedActionContext,
        payload: {
            [key: string]: any
        }
    ): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.GET_RECOMMENDATIONS]({ commit, rootState }, payload) {
        await axios.get(
            'https://api.spotify.com/v1/recommendations',
            {
                headers: {
                    'Authorization': 'Bearer ' + rootState.authorization.accessToken?.getToken(),
                },
                params: payload
            }
        ).then((resp: { data: { tracks: Array<SpotifyTrack> } }) => {
            const tracks: Array<Track> = []
            resp.data.tracks.forEach((track: SpotifyTrack) => {
                tracks.push(TrackMapper.spotifyTrackToTrack(track))
            })
            commit(MutationTypes.SET_RECOMMENDATIONS, tracks)
        })
    }
}