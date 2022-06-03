export class TokenService {

    public getAccessTokenFromLocalStorage(): any | null {
        const accessTokenString: string | null = this.getAccessTokenStringFromLocalStorage()
        if (accessTokenString === null) {
            return null
        }
        return JSON.parse(accessTokenString)
    }

    private getAccessTokenStringFromLocalStorage(): string | null {
        return localStorage.getItem('accessToken')
    }
}