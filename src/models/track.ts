import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Duration } from '@/models/duration'

export class Track {

    private id: string
    
    private album: Album

    private artists: Array<Artist>

    private duration: Duration

    private explicit: boolean

    private markets: Array<string>

    private name: string

    private uri: string

    constructor(id: string, album: Album, artists: Array<Artist>, duration: Duration, explicit: boolean, markets: Array<string>, name: string, uri: string) {
        this.id = id
        this.album = album
        this.artists = artists
        this.duration = duration
        this.explicit = explicit
        this.markets = markets
        this.name = name
        this.uri = uri
    }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public getAlbum(): Album {
        return this.album
    }

    public setAlbum(album: Album): void {
        this.album = album
    }

    public getArtists(): Array<Artist> {
        return this.artists
    }

    public setArtists(artists: Array<Artist>): void {
        this.artists = artists
    }

    public getDuration(): Duration {
        return this.duration
    }

    public setDuration(duration: Duration): void {
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