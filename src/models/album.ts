import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

export class Album {

    private id: string | null

    private artists: Array<Artist>

    private images : Array<Image>

    private markets: Array<string>

    private name: string | null
    
    private releaseDate: Date | null

    private total: number
    
    private type: string | null

    constructor() {
        this.id = null
        this.artists = []
        this.images = []
        this.markets = []
        this.name = null
        this.releaseDate = null
        this.total = 0
        this.type = null
    }

    public getId(): string | null {
        return this.id
    }

    public setId(id: string | null): void {
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

    public getName(): string | null {
        return this.name
    }

    public setName(name: string | null): void {
        this.name = name
    }

    public getReleaseDate(): Date | null {
        return this.releaseDate
    }

    public setReleaseDate(releaseDate: Date | null): void {
        this.releaseDate = releaseDate
    }

    public getTotal(): number {
        return this.total
    }

    public setTotal(total: number): void {
        this.total = total
    }

    public getType(): string | null {
        return this.type
    }

    public setType(type: string | null): void {
        this.type = type
    }
}