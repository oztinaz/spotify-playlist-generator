export class Image {

    private url: string
    
    private height: number

    private width: number

    constructor(url: string, height: number, width: number) {
        this.url = url
        this.height = height
        this.width = width
    }

    public getUrl(): string {
        return this.url
    }

    public setUrl(url: string): void {
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