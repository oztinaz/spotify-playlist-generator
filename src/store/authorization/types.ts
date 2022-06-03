import { AccessToken } from '@/models/access-token'

export type State = {
    clientId: string | null,
    clientSecret: string | null,
    responseType: string | null,
    redirectUri: string | null,
    state: string | null,
    scope: string | null,
    authorizationUrl: string | null,
    accessToken: AccessToken | null
}