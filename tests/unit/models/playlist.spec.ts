import { Playlist } from '@/models/playlist'

const fakeId: string = 'fakeId'
const fakeCollaborative: boolean = true
const fakeDescription: string = 'fakeDescription'
const fakeHref: string = 'fakeHref'
const fakeName: string = 'fakeName'
const fakePublicity: boolean = true

describe('@/models/playlist.ts', () => {
    it('checks getters', () => {
        const playlist: Playlist = new Playlist(
            fakeId,
            fakeCollaborative,
            fakeDescription,
            fakeHref,
            fakeName,
            fakePublicity
        )

        expect(playlist.getId()).toBe(fakeId)
        expect(playlist.isCollaborative()).toBe(fakeCollaborative)
        expect(playlist.getDescription()).toBe(fakeDescription)
        expect(playlist.getHref()).toBe(fakeHref)
        expect(playlist.getName()).toBe(fakeName)
        expect(playlist.isPublic()).toBe(fakePublicity)
    })

    it('checks setters', () => {
        const playlist: Playlist = new Playlist(
            'a',
            false,
            'a',
            'a',
            'a',
            false
        )

        playlist.setId(fakeId)
        expect(playlist.getId()).toBe(fakeId)

        playlist.setCollaborative(fakeCollaborative)
        expect(playlist.isCollaborative()).toBe(fakeCollaborative)

        playlist.setDescription(fakeDescription)
        expect(playlist.getDescription()).toBe(fakeDescription)

        playlist.setHref(fakeHref)
        expect(playlist.getHref()).toBe(fakeHref)

        playlist.setName(fakeName)
        expect(playlist.getName()).toBe(fakeName)

        playlist.setPublicity(fakePublicity)
        expect(playlist.isPublic()).toBe(fakePublicity)
    })
})