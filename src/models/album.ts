import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

export class Album {

    private id: string

    private artists: Array<Artist>

    private images : Array<Image>

    private markets: Array<string>

    private name: string

    private total: number
    
    private type: string

    constructor(id: string, artists: Array<Artist>, images: Array<Image>, markets: Array<string>, name: string, total: number, type: string) {
        this.id = id
        this.artists = artists
        this.images = images
        this.markets = markets
        this.name = name
        this.total = total
        this.type = type
    }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public getArtists(): Array<Artist> {
        return this.artists
    }

    public setArtists(artists: Array<Artist>): void {
        this.artists = artists
    }

    public getImages(): Array<Image> {
        return this.images
    }

    public setImages(images: Array<Image>): void {
        this.images = images
    }

    public getMarkets(): Array<string> {
        return this.markets
    }

    public setMarkets(markets: Array<string>): void {
        this.markets = markets
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getTotal(): number {
        return this.total
    }

    public setTotal(total: number): void {
        this.total = total
    }

    public getType(): string {
        return this.type
    }

    public setType(type: string): void {
        this.type = type
    }
}