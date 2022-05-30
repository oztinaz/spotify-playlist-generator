import { AccessToken } from '@/models/access-token'
import store from '@/store'

describe('@/store/authorization/mutations.ts', () => {
    it('checks for authorization mutations', () => {
        const mockClientId: string | null = 'some_client_id'
        store.commit('authorization/setClientId', mockClientId)
        expect(store.state.authorization.clientId).toBe(mockClientId)

        const mockClientSecret: string | null = 'some_client_secret'
        store.commit('authorization/setClientSecret', mockClientSecret)
        expect(store.state.authorization.clientSecret).toBe(mockClientSecret)
        
        const mockResponseType: string | null = 'some_response_type'
        store.commit('authorization/setResponseType', mockResponseType)
        expect(store.state.authorization.responseType).toBe(mockResponseType)
        
        const mockRedirectUri: string | null = 'some_redirect_uri'
        store.commit('authorization/setRedirectUri', mockRedirectUri)
        expect(store.state.authorization.redirectUri).toBe(mockRedirectUri)
        
        const mockState: string | null = 'some_state'
        store.commit('authorization/setState', mockState)
        expect(store.state.authorization.state).toBe(mockState)
        
        const mockScope: string | null = 'some_scope'
        store.commit('authorization/setScope', mockScope)
        expect(store.state.authorization.scope).toBe(mockScope)
        
        const mockAuthorizationUrl: string | null = 'some_authorization_url'
        store.commit('authorization/setAuthorizationUrl', mockAuthorizationUrl)
        expect(store.state.authorization.authorizationUrl).toBe(mockAuthorizationUrl)
        
        const mockAccessToken: AccessToken | null = new AccessToken('some_token', new Date(), ['a', 'b'], 'some_refresh')
        store.commit('authorization/setAccessToken', mockAccessToken)
        expect(store.state.authorization.accessToken).toStrictEqual(mockAccessToken)
    })
})