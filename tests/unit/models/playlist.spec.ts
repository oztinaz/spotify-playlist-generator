// Fakers
import { generateFakePlaylist } from '@/../tests/fakers/models/playlist'

// Models
import { Playlist } from '@/models/playlist'

describe('@/models/playlist.ts', () => {
    it('checks getters and setters', () => {
        const fakePlaylist: Playlist = generateFakePlaylist()
        const playlist: Playlist = new Playlist()

        playlist.setId(fakePlaylist.getId())
        expect(playlist.getId()).toBe(fakePlaylist.getId())

        playlist.setCollaborative(fakePlaylist.isCollaborative())
        expect(playlist.isCollaborative()).toBe(fakePlaylist.isCollaborative())

        playlist.setDescription(fakePlaylist.getDescription())
        expect(playlist.getDescription()).toBe(fakePlaylist.getDescription())

        playlist.setImages(fakePlaylist.getImages())
        expect(playlist.getImages()).toStrictEqual(fakePlaylist.getImages())

        playlist.setName(fakePlaylist.getName())
        expect(playlist.getName()).toBe(fakePlaylist.getName())

        playlist.setPublicity(fakePlaylist.isPublic())
        expect(playlist.isPublic()).toBe(fakePlaylist.isPublic())

        playlist.setTotal(fakePlaylist.getTotal())
        expect(playlist.getTotal()).toBe(fakePlaylist.getTotal())

        playlist.setTracks(fakePlaylist.getTracks())
        expect(playlist.getTracks()).toBe(fakePlaylist.getTracks())
    })
})