import { TokenMapper } from '@/mappers/token'
import { AccessToken } from '@/models/access-token'
import { SpotifyToken } from '@/types/spotify-token'

const mockLocalStorageAccessToken = {
    token: 'fakeToken',
    expiresAt: new Date(),
    refresh: 'fakeRefresh',
    scopes: ['a', 'b'],
}

describe('@/mappers/token.ts', () => {
    it('checks for localStorageAccessTokenToAccessToken method', () => {
        const accessToken: AccessToken | null = TokenMapper.localStorageAccessTokenToAccessToken(mockLocalStorageAccessToken)

        expect(accessToken).not.toBe(null)
        expect(accessToken?.getToken()).toBe(mockLocalStorageAccessToken.token)
        expect(accessToken?.getExpiresAt()).toStrictEqual(mockLocalStorageAccessToken.expiresAt)
        expect(accessToken?.getRefresh()).toBe(mockLocalStorageAccessToken.refresh)
        expect(accessToken?.getScopes()).toBe(mockLocalStorageAccessToken.scopes)
    })
    
    it('checks for localStorageAccessTokenToAccessToken method when null passed', () => {
        const accessToken: AccessToken | null = TokenMapper.localStorageAccessTokenToAccessToken(null)

        expect(accessToken).toBe(null)
    })

    it('checks for spotifyTokenToAccessToken method', () => {
        const now: Date = new Date()
        const mockSpotifyToken: SpotifyToken = {
            access_token: 'access_token',
            expires_in: 3600,
            refresh_token: 'refresh_token',
            scope: 'a b',
            token_type: 'Bearer'
        }
        const accessToken: AccessToken = TokenMapper.spotifyTokenToAccessToken(mockSpotifyToken)

        expect(accessToken.getToken()).toBe(mockSpotifyToken.access_token)
        // expect(accessToken.getExpiresAt()).toBe(new Date(mockSpotifyToken.expires_in))
        expect(accessToken.getRefresh()).toBe(mockSpotifyToken.refresh_token)
        expect(accessToken.getScopes()).toStrictEqual(mockSpotifyToken.scope.split(' '))
    })
})