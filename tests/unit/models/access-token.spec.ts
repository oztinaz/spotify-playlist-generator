import { AccessToken } from '@/models/access-token'

const fakeToken: string = 'fakeToken'
const fakeExpiresAt: Date = new Date()
const fakeScopes: Array<string> = ['a', 'b']
const fakeRefresh: string = 'fakeRefresh'

describe('@/models/access-token.ts', () => {
    it('checks getters', () => {
        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            fakeExpiresAt,
            fakeScopes,
            fakeRefresh
        )

        expect(accessToken.getToken()).toBe(fakeToken)
        expect(accessToken.getExpiresAt()).toStrictEqual(fakeExpiresAt)
        expect(accessToken.getScopes()).toStrictEqual(fakeScopes)
        expect(accessToken.getRefresh()).toBe(fakeRefresh)
    })

    it('checks setters', () => {
        const accessToken: AccessToken = new AccessToken(
            'a',
            new Date(0),
            ['a', 'b'],
            'b'
        )

        accessToken.setToken(fakeToken)
        expect(accessToken.getToken()).toBe(fakeToken)

        accessToken.setExpiresAt(fakeExpiresAt)
        expect(accessToken.getExpiresAt()).toStrictEqual(fakeExpiresAt)
        
        accessToken.setScopes(fakeScopes)
        expect(accessToken.getScopes()).toStrictEqual(fakeScopes)

        accessToken.setRefresh(fakeRefresh)
        expect(accessToken.getRefresh()).toBe(fakeRefresh)
    })

    it('checks isRefreshable when refresh is not null', () => {
        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            fakeExpiresAt,
            fakeScopes,
            fakeRefresh
        )

        expect(accessToken.isRefreshable()).toBe(true)
    })

    it('checks isRefreshable when refresh is null', () => {
        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            fakeExpiresAt,
            fakeScopes
        )

        expect(accessToken.isRefreshable()).toBe(false)
    })

    it('checks hasExpired when expiresAt is earlier', () => {
        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            new Date(0),
            fakeScopes,
            fakeToken
        )

        expect(accessToken.hasExpired()).toBe(true)
    })

    it('checks hasExpired when expiresAt is later', () => {
        const tomorrow: Date = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)

        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            tomorrow,
            fakeScopes,
            fakeToken
        )

        expect(accessToken.hasExpired()).toBe(false)
    })

    it('checks toString', () => {
        const accessToken: AccessToken = new AccessToken(
            fakeToken,
            fakeExpiresAt,
            fakeScopes,
            fakeRefresh
        )

        expect(accessToken.toString()).toBe('{"token":"' + fakeToken + '","expiresAt":"' + fakeExpiresAt.toISOString() + '","scopes":' + JSON.stringify(fakeScopes) + ',"refresh":"' + fakeRefresh + '"}')
    })
})