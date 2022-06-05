import { 
    State as AuthorizationState
} from '@/store/authorization/types'

import {
    State as GenreState
} from '@/store/genre/types'

import {
    State as PlaylistState
} from '@/store/playlist/types'

import {
    State as SearchState
} from '@/store/search/types'

import {
    State as TrackState
} from '@/store/track/types'

export type State = {
    // modules
    authorization: AuthorizationState,
    genre: GenreState,
    playlist: PlaylistState,
    search: SearchState,
    track: TrackState
}