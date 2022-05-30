import { 
    State as AuthorizationState
} from '@/store/authorization/types'

export type State = {
    // modules
    authorization: AuthorizationState
}