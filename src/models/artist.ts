import { Image } from '@/models/image'

export class Artist {

    private id: string

    private genres: Array<string>

    private images : Array<Image>

    private name: string

    private uri: string

    constructor(id: string, genres: Array<string>, images: Array<Image>, name: string, uri: string) {
        this.id = id
        this.genres = genres
        this.images = images
        this.name = name
        this.uri = uri
    }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
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

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getUri(): string {
        return this.uri
    }

    public setUri(uri: string): void {
        this.uri = uri
    }
}