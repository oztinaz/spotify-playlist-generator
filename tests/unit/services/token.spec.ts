import { TokenService } from '@/services/token'

const mockLocalStorageAccessToken = {
    token: 'fakeToken',
    expiresAt: new Date(),
    refresh: 'fakeRefresh',
    scopes: ['a', 'b'],
}

describe('@/services/token.ts', () => {
    it('checks for localStorageAccessTokenToAccessToken method when it is not null', () => {
        localStorage.setItem('accessToken', JSON.stringify(mockLocalStorageAccessToken))

        const service: TokenService = new TokenService()
        const localStorageAccessToken: any | null = service.getAccessTokenFromLocalStorage()

        expect(localStorageAccessToken).not.toBe(null)
        expect(localStorageAccessToken.token).toBe(mockLocalStorageAccessToken.token)
        expect(localStorageAccessToken.expiresAt).toBe(mockLocalStorageAccessToken.expiresAt.toISOString())
        expect(localStorageAccessToken.refresh).toBe(mockLocalStorageAccessToken.refresh)
        expect(localStorageAccessToken.scopes).toStrictEqual(mockLocalStorageAccessToken.scopes)
    })

    it('checks for localStorageAccessTokenToAccessToken method when it is null', () => {
        localStorage.removeItem('accessToken')

        const service: TokenService = new TokenService()
        const localStorageAccessToken: any | null = service.getAccessTokenFromLocalStorage()

        expect(localStorageAccessToken).toBe(null)
    })
})