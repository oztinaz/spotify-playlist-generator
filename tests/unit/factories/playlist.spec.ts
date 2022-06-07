import { PlaylistFactory } from '@/factories/playlist'
import { Playlist } from '@/models/playlist'
import { generateFakePlaylist } from '@/../tests/fakers/models/playlist'

describe('@/factories/playlist.ts', () => {
    it('checks create method', () => {
        const fakePlaylist: Playlist = generateFakePlaylist()
        const playlist: Playlist = PlaylistFactory.create(
            fakePlaylist.getId() as string,
            fakePlaylist.isCollaborative(),
            fakePlaylist.getDescription() as string,
            fakePlaylist.getImages(),
            fakePlaylist.getName() as string,
            fakePlaylist.isPublic(),
            fakePlaylist.getTotal(),
            fakePlaylist.getTracks()
        )

        expect(playlist.getId()).toBe(fakePlaylist.getId())
        expect(playlist.isCollaborative()).toBe(fakePlaylist.isCollaborative())
        expect(playlist.getDescription()).toBe(fakePlaylist.getDescription())
        expect(playlist.getImages()).toStrictEqual(fakePlaylist.getImages())
        expect(playlist.getName()).toBe(fakePlaylist.getName())
        expect(playlist.isPublic()).toBe(fakePlaylist.isPublic())
        expect(playlist.getTotal()).toBe(fakePlaylist.getTotal())
        expect(playlist.getTracks()).toStrictEqual(fakePlaylist.getTracks())
    })
})