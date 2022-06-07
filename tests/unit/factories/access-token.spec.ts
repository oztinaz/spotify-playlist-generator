import { AccessTokenFactory } from '@/factories/access-token'
import { AccessToken } from '@/models/access-token'
import { generateFakeAccessToken } from '@/../tests/fakers/models/access-token'

describe('@/factories/access-token.ts', () => {
    it('checks create method with not null refresh', () => {
        const fakeAccessToken: AccessToken = generateFakeAccessToken()
        const accessToken: AccessToken = AccessTokenFactory.create(
            fakeAccessToken.getToken(),
            fakeAccessToken.getExpiresAt(),
            fakeAccessToken.getScopes(),
            fakeAccessToken.getRefresh()
        )

        expect(accessToken.getToken()).toBe(fakeAccessToken.getToken())
        expect(accessToken.getExpiresAt()).toStrictEqual(fakeAccessToken.getExpiresAt())
        expect(accessToken.getScopes()).toStrictEqual(fakeAccessToken.getScopes())
        expect(accessToken.getRefresh()).toBe(fakeAccessToken.getRefresh())
    })

    it('checks create method with null refresh', () => {
        const fakeAccessToken: AccessToken = generateFakeAccessToken()
        const accessToken: AccessToken = AccessTokenFactory.create(
            fakeAccessToken.getToken(),
            fakeAccessToken.getExpiresAt(),
            fakeAccessToken.getScopes()
        )

        expect(accessToken.getToken()).toBe(fakeAccessToken.getToken())
        expect(accessToken.getExpiresAt()).toStrictEqual(fakeAccessToken.getExpiresAt())
        expect(accessToken.getScopes()).toStrictEqual(fakeAccessToken.getScopes())
        expect(accessToken.getRefresh()).toBe(null)
    })
})