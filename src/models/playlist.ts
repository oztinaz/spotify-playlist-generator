export class Playlist {

    private id: string

    private collaborative: boolean

    private description: string

    private href: string

    private name: string

    private publicity: boolean

    constructor(
        id: string, 
        collaborative: boolean, 
        description: string,
        href: string,
        name: string,
        publicity: boolean
    ) {
        this.id = id
        this.collaborative = collaborative
        this.description = description
        this.href = href
        this.name = name
        this.publicity = publicity
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

    public getHref(): string {
        return this.href
    }

    public setHref(href: string): void {
        this.href = href
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
}