import { Image } from '@/models/image'
import { Track } from '@/models/track'

export class Playlist {

    private id: string

    private collaborative: boolean

    private description: string

    private images : Array<Image>

    private name: string

    private publicity: boolean

    private total: number

    private tracks: Array<Track>

    constructor(
        id: string, 
        collaborative: boolean, 
        description: string,
        images: Array<Image>,
        name: string,
        publicity: boolean,
        total: number,
        tracks: Array<Track>
    ) {
        this.id = id
        this.collaborative = collaborative
        this.description = description
        this.images = images
        this.name = name
        this.publicity = publicity
        this.total = total
        this.tracks = tracks
    }

    public getId(): string {
        return this.id
    }

    public setId(id: string): void {
        this.id = id
    }

    public isCollaborative(): boolean {
        return this.collaborative
    }

    public setCollaborative(collaborative: boolean): void {
        this.collaborative = collaborative
    }

    public getDescription(): string {
        return this.description
    }

    public setDescription(description: string): void {
        this.description = description
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

    public isPublic(): boolean {
        return this.publicity
    }

    public setPublicity(publicity: boolean): void {
        this.publicity = publicity
    }

    public getTotal(): number {
        return this.total
    }

    public setTotal(total: number): void {
        this.total = total
    }

    public getTracks(): Array<Track> {
        return this.tracks
    }

    public setTracks(tracks: Array<Track>): void {
        this.tracks = tracks
    }
}