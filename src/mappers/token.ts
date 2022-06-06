import { SpotifyToken } from '@/types/spotify-token'
import { AccessToken } from '@/models/access-token'
import { AccessTokenFactory } from '@/factories/access-token'

export class TokenMapper {

    public static localStorageAccessTokenToAccessToken(tokenFromLocalStorage: any | null): AccessToken | null {
        if (tokenFromLocalStorage === null) {
            return null
        }

        return AccessTokenFactory.create(
            tokenFromLocalStorage.token,
            new Date(tokenFromLocalStorage.expiresAt),
            tokenFromLocalStorage.scopes,
            tokenFromLocalStorage.refresh
        )
    }

    public static spotifyTokenToAccessToken(spotifyToken: SpotifyToken): AccessToken {
        return AccessTokenFactory.create(
            spotifyToken.access_token,
            this.getExpiresAt(spotifyToken.expires_in),
            this.getScopes(spotifyToken.scope),
            this.getRefresh(spotifyToken)
        )
    }

    private static getExpiresAt(expiresIn: number): Date {
        const expiresAt = new Date()
        expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn)
        return expiresAt
    }

    private static getRefresh(spotifyToken: SpotifyToken): string | null {
        return spotifyToken['refresh_token'] !== undefined ? spotifyToken['refresh_token'] : null
    }

    private static getScopes(scope: string): Array<string> {
        return scope.split(' ')
    }
}