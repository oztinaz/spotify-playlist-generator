import { Image } from '@/models/image'
import { Track } from '@/models/track'

export class Playlist {

    private id: string | null

    private collaborative: boolean

    private description: string | null

    private images : Array<Image>

    private name: string | null

    private publicity: boolean

    private total: number

    private tracks: Array<Track>

    constructor() {
        this.id = null
        this.collaborative = false
        this.description = null
        this.images = []
        this.name = null
        this.publicity = false
        this.total = 0
        this.tracks = []
    }

    public getId(): string | null {
        return this.id
    }

    public setId(id: string | null): void {
        this.id = id
    }

    public isCollaborative(): boolean {
        return this.collaborative
    }

    public setCollaborative(collaborative: boolean): void {
        this.collaborative = collaborative
    }

    public getDescription(): string | null {
        return this.description
    }

    public setDescription(description: string | null): void {
        this.description = description
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