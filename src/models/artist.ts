import { Image } from '@/models/image'

export class Artist {

    private id: string | null

    private genres: Array<string>

    private images : Array<Image>

    private name: string | null

    private uri: string | null

    constructor() {
        this.id = null
        this.genres = []
        this.images = []
        this.name = null
        this.uri = null
    }

    public getId(): string | null {
        return this.id
    }

    public setId(id: string | null): void {
        this.id = id
    }

    public getGenres(): Array<string> {
        return this.genres
    }

    public setGenres(genres: Array<string>): void {
        this.genres = genres
    }

    public getImages(): Array<Image> {
        return this.images
    }

    public setImages(images: Array<Image>): void {
        this.images = images
    }

    public getName(): string | null {
        return this.name
    }

    public setName(name: string | null): void {
        this.name = name
    }

    public getUri(): string | null {
        return this.uri
    }

    public setUri(uri: string | null): void {
        this.uri = uri
    }
}