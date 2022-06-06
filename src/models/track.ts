import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Duration } from '@/models/duration'

export class Track {

    private id: string | null
    
    private album: Album | null

    private artists: Array<Artist>

    private duration: Duration | null

    private explicit: boolean

    private markets: Array<string>

    private name: string | null

    private uri: string | null

    constructor() {
        this.id = null
        this.album = null
        this.artists = []
        this.duration = null
        this.explicit = false
        this.markets = []
        this.name = null
        this.uri = null
    }

    public getId(): string | null {
        return this.id
    }

    public setId(id: string | null): void {
        this.id = id
    }

    public getAlbum(): Album | null {
        return this.album
    }

    public setAlbum(album: Album | null): void {
        this.album = album
    }

    public getArtists(): Array<Artist> {
        return this.artists
    }

    public setArtists(artists: Array<Artist>): void {
        this.artists = artists
    }

    public getDuration(): Duration | null {
        return this.duration
    }

    public setDuration(duration: Duration | null): void {
        this.duration = duration
    }

    public isExplicit(): boolean {
        return this.explicit
    }

    public setExplicit(explicit: boolean): void {
        this.explicit = explicit
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

    public getUri(): string | null {
        return this.uri
    }

    public setUri(uri: string | null): void {
        this.uri = uri
    }
}