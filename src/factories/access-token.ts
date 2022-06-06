import { AccessToken } from '@/models/access-token'

export class AccessTokenFactory {

    public static create(
        token: string,
        expiresAt: Date,
        scopes: Array<string>,
        refresh: string | null = null
    ): AccessToken {
        return new AccessToken(
            token,
            expiresAt,
            scopes,
            refresh
        )
    }
}