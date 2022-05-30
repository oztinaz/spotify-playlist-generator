import store from '@/store'

describe('@/store/authorization/getters.ts', () => {
    it('checks authorization getter isAuthorizable', () => {
        store.commit('authorization/setClientId', 'a')
        store.commit('authorization/setClientSecret', 'a')
        store.commit('authorization/setResponseType', 'a')
        store.commit('authorization/setRedirectUri', 'a')
        store.commit('authorization/setState', 'a')
        store.commit('authorization/setScope', 'a')
        store.commit('authorization/setAuthorizationUrl', 'a')
        expect(store.getters['authorization/isAuthorizable']).toBe(true)

        store.commit('authorization/setClientId', null)
        expect(store.getters['authorization/isAuthorizable']).toBe(false)
    })

    it('checks authorization getter headers', () => {
        const fakeClientId: string = 'fakeClientId'
        const fakeClientSecret: string = 'fakeClientId'

        store.commit('authorization/setClientId', fakeClientId),
        store.commit('authorization/setClientSecret', fakeClientSecret),

        expect(store.getters['authorization/headers']).toStrictEqual({
            'Authorization': 'Basic ' + btoa(fakeClientId + ':' + fakeClientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    })

    it('checks authorization getter accessTokenParams', () => {
        const fakeRedirectUri: string = 'fakeRedirectUri'
        const fakeCode: string = 'fakeCode'

        store.commit('authorization/setRedirectUri', fakeRedirectUri),

        expect(store.getters['authorization/accessTokenParams'](fakeCode)).toStrictEqual({
            code: fakeCode,
            redirect_uri: fakeRedirectUri,
            grant_type: 'authorization_code',
        })
    })

    it('checks authorization getter refreshTokenParams', () => {
        const fakeRedirectUri: string = 'fakeRedirectUri'
        const fakeRefreshToken: string = 'fakeRefreshToken'

        store.commit('authorization/setRedirectUri', fakeRedirectUri),

        expect(store.getters['authorization/refreshTokenParams'](fakeRefreshToken)).toStrictEqual({
            refresh_token: fakeRefreshToken,
            grant_type: 'refresh_token',
        })
    })
})