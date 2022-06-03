import store from '@/store'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockSpotifyTokenWithRefreshToken = {
    access_token: 'token',
    expires_in: 3600,
    scope: 'a b',
    refresh_token: 'refresh',
    token_type: 'Bearer'
}

const mockSpotifyTokenWithoutRefreshToken = {
    access_token: 'token1',
    expires_in: 3600,
    scope: 'c d',
    token_type: 'Bearer'
}

const now: Date = new Date()

const fakeClientId: string = 'fakeClientId'
const fakeClientSecret: string = 'fakeClientSecret'
const fakeRedirectUri: string = 'fakeRedirectUri'

describe('@/store/authorization/actions.ts', () => {
    it('checks for authorization action requestToken for accessToken', async () => {
        mockedAxios.post.mockResolvedValue({ data: mockSpotifyTokenWithRefreshToken })

        store.commit('authorization/setClientId', fakeClientId)
        store.commit('authorization/setClientSecret', fakeClientSecret)
        store.commit('authorization/setRedirectUri', fakeRedirectUri)

        const fakeCode: string = 'code'
        await store.dispatch('authorization/requestToken', store.getters['authorization/accessTokenParams'](fakeCode))

        expect(mockedAxios.post).toBeCalledTimes(1)
        expect(mockedAxios.post).toBeCalledWith(
            'https://accounts.spotify.com/api/token',
            null,
            {
                headers: store.getters['authorization/headers'],
                params: store.getters['authorization/accessTokenParams'](fakeCode)
            } 
        )

        expect(store.state.authorization.accessToken?.getToken()).toBe(mockSpotifyTokenWithRefreshToken.access_token)
        // expect(store.state.authorization.accessToken?.getExpiresAt()).toBe(now)
        expect(store.state.authorization.accessToken?.getScopes()).toStrictEqual(mockSpotifyTokenWithRefreshToken.scope.split(' '))
        expect(store.state.authorization.accessToken?.getRefresh()).toBe(mockSpotifyTokenWithRefreshToken.refresh_token)
        expect(store.state.authorization.accessToken?.toString()).toBe(localStorage.getItem('accessToken'))
    })

    it('checks for authorization action requestToken for refreshToken', async () => {
        mockedAxios.post.mockResolvedValue({ data: mockSpotifyTokenWithoutRefreshToken })

        store.commit('authorization/setClientId', fakeClientId)
        store.commit('authorization/setClientSecret', fakeClientSecret)
        store.commit('authorization/setRedirectUri', fakeRedirectUri)

        await store.dispatch('authorization/requestToken', store.getters['authorization/refreshTokenParams'](mockSpotifyTokenWithRefreshToken.refresh_token))

        expect(mockedAxios.post).toBeCalledTimes(2)
        expect(mockedAxios.post).toBeCalledWith(
            'https://accounts.spotify.com/api/token',
            null,
            {
                headers: store.getters['authorization/headers'],
                params: store.getters['authorization/refreshTokenParams'](mockSpotifyTokenWithRefreshToken.refresh_token)
            } 
        )

        expect(store.state.authorization.accessToken?.getToken()).toBe(mockSpotifyTokenWithoutRefreshToken.access_token)
        // expect(store.state.authorization.accessToken?.getExpiresAt()).toBe(now)
        expect(store.state.authorization.accessToken?.getScopes()).toStrictEqual(mockSpotifyTokenWithoutRefreshToken.scope.split(' '))
        expect(store.state.authorization.accessToken?.toString()).toBe(localStorage.getItem('accessToken'))
    })
})