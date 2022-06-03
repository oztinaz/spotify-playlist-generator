import { 
    State as AuthorizationState
} from '@/store/authorization/types'

import {
    State as PlaylistState
} from '@/store/playlist/types'

export type State = {
    // modules
    authorization: AuthorizationState,
    playlist: PlaylistState
}