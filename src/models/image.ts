export class Image {

    private url: string | null
    
    private height: number

    private width: number

    constructor() {
        this.url = null
        this.height = 0
        this.width = 0
    }

    public getUrl(): string | null {
        return this.url
    }

    public setUrl(url: string | null): void {
        this.url = url
    }

    public getHeight(): number {
        return this.height
    }

    public setHeight(height: number): void {
        this.height = height
    }

    public getWidth(): number {
        return this.width
    }

    public setWidth(width: number): void {
        this.width = width
    }
}