import { Album } from '@/models/album'
import { Duration } from '@/models/duration'
import { Image } from '@/models/image'
import { Playlist } from '@/models/playlist'
import { Track } from '@/models/track'

const fakeId: string = 'fakeId'
const fakeCollaborative: boolean = true
const fakeDescription: string = 'fakeDescription'
const fakeImages: Array<Image> = [
    new Image('url1', 40, 40),
    new Image('url2', 50, 50)
]
const fakeName: string = 'fakeName'
const fakePublicity: boolean = true
const fakeTotal: number = 20
const fakeTracks: Array<Track> = [
    new Track('', new Album('', [], [], [], '', 0, ''), [], new Duration(0, 0, 0, 0), false, [], '', ''),
    new Track('', new Album('', [], [], [], '', 0, ''), [], new Duration(0, 0, 0, 0), false, [], '', '')
]

describe('@/models/playlist.ts', () => {
    it('checks getters', () => {
        const playlist: Playlist = new Playlist(
            fakeId,
            fakeCollaborative,
            fakeDescription,
            fakeImages,
            fakeName,
            fakePublicity,
            fakeTotal,
            fakeTracks
        )

        expect(playlist.getId()).toBe(fakeId)
        expect(playlist.isCollaborative()).toBe(fakeCollaborative)
        expect(playlist.getDescription()).toBe(fakeDescription)
        expect(playlist.getImages()).toStrictEqual(fakeImages)
        expect(playlist.getName()).toBe(fakeName)
        expect(playlist.isPublic()).toBe(fakePublicity)
        expect(playlist.getTotal()).toBe(fakeTotal)
    })

    it('checks setters', () => {
        const playlist: Playlist = new Playlist(
            'a',
            false,
            'a',
            [],
            'a',
            false,
            0,
            []
        )

        playlist.setId(fakeId)
        expect(playlist.getId()).toBe(fakeId)

        playlist.setCollaborative(fakeCollaborative)
        expect(playlist.isCollaborative()).toBe(fakeCollaborative)

        playlist.setDescription(fakeDescription)
        expect(playlist.getDescription()).toBe(fakeDescription)

        playlist.setImages(fakeImages)
        expect(playlist.getImages()).toStrictEqual(fakeImages)

        playlist.setName(fakeName)
        expect(playlist.getName()).toBe(fakeName)

        playlist.setPublicity(fakePublicity)
        expect(playlist.isPublic()).toBe(fakePublicity)

        playlist.setTotal(fakeTotal)
        expect(playlist.getTotal()).toBe(fakeTotal)

        playlist.setTracks(fakeTracks)
        expect(playlist.getTracks()).toBe(fakeTracks)
    })
})