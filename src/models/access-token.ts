export class AccessToken {

    private token: string

    private expiresAt: Date

    private scopes: Array<string>

    private refresh: string | null
    
    constructor(token: string, expiresAt: Date, scopes: Array<string>, refresh: string | null = null) {
        this.token = token
        this.expiresAt = expiresAt
        this.scopes = scopes
        this.refresh = refresh
    }

    public getToken(): string {
        return this.token
    }

    public setToken(token: string): void {
        this.token = token
    }

    public getExpiresAt(): Date {
        return this.expiresAt
    }

    public setExpiresAt(expiresAt: Date): void {
        this.expiresAt = expiresAt
    }

    public getScopes(): Array<string> {
        return this.scopes
    }

    public setScopes(scopes: Array<string>): void {
        this.scopes = scopes
    }

    public getRefresh(): string | null {
        return this.refresh
    }

    public setRefresh(refresh: string | null): void {
        this.refresh = refresh
    }

    public isRefreshable(): boolean {
        return this.getRefresh() !== null
    }

    public hasExpired(): boolean {
        return new Date() >= this.getExpiresAt()
    }

    public toString(): string {
        return JSON.stringify({
            token: this.getToken(),
            expiresAt: this.getExpiresAt(),
            scopes: this.getScopes(),
            refresh: this.getRefresh(),
        })
    }
}