import store from '@/store'
import axios from 'axios'

import { generateFakeSpotifyTokenWithRefreshToken, generateFakeSpotifyTokenWithoutRefreshToken } from '@/../tests/fakers/spotify/token'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyTokenWithRefreshToken = generateFakeSpotifyTokenWithRefreshToken()

const fakeSpotifyTokenWithoutRefreshToken = generateFakeSpotifyTokenWithoutRefreshToken()

const now: Date = new Date()

const fakeClientId: string = 'fakeClientId'
const fakeClientSecret: string = 'fakeClientSecret'
const fakeRedirectUri: string = 'fakeRedirectUri'

describe('@/store/authorization/actions.ts', () => {
    it('checks for authorization action requestToken for accessToken', async () => {
        mockedAxios.post.mockResolvedValue({ data: fakeSpotifyTokenWithRefreshToken })

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

        expect(store.state.authorization.accessToken?.getToken()).toBe(fakeSpotifyTokenWithRefreshToken.access_token)
        // expect(store.state.authorization.accessToken?.getExpiresAt()).toBe(now)
        expect(store.state.authorization.accessToken?.getScopes()).toStrictEqual(fakeSpotifyTokenWithRefreshToken.scope.split(' '))
        expect(store.state.authorization.accessToken?.getRefresh()).toBe(fakeSpotifyTokenWithRefreshToken.refresh_token)
        expect(store.state.authorization.accessToken?.toString()).toBe(localStorage.getItem('accessToken'))
    })

    it('checks for authorization action requestToken for refreshToken', async () => {
        mockedAxios.post.mockResolvedValue({ data: fakeSpotifyTokenWithoutRefreshToken })

        store.commit('authorization/setClientId', fakeClientId)
        store.commit('authorization/setClientSecret', fakeClientSecret)
        store.commit('authorization/setRedirectUri', fakeRedirectUri)

        await store.dispatch('authorization/requestToken', store.getters['authorization/refreshTokenParams'](fakeSpotifyTokenWithRefreshToken.refresh_token))

        expect(mockedAxios.post).toBeCalledTimes(2)
        expect(mockedAxios.post).toBeCalledWith(
            'https://accounts.spotify.com/api/token',
            null,
            {
                headers: store.getters['authorization/headers'],
                params: store.getters['authorization/refreshTokenParams'](fakeSpotifyTokenWithRefreshToken.refresh_token)
            } 
        )

        expect(store.state.authorization.accessToken?.getToken()).toBe(fakeSpotifyTokenWithoutRefreshToken.access_token)
        // expect(store.state.authorization.accessToken?.getExpiresAt()).toBe(now)
        expect(store.state.authorization.accessToken?.getScopes()).toStrictEqual(fakeSpotifyTokenWithoutRefreshToken.scope.split(' '))
        expect(store.state.authorization.accessToken?.toString()).toBe(localStorage.getItem('accessToken'))
    })
})