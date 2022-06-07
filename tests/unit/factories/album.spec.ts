import { AlbumFactory } from '@/factories/album'
import { Album } from '@/models/album'
import { generateFakeAlbum } from '@/../tests/fakers/models/album'

describe('@/factories/album.ts', () => {
    it('checks create method', () => {
        const fakeAlbum: Album = generateFakeAlbum()
        const album: Album = AlbumFactory.create(
            fakeAlbum.getId() as string,
            fakeAlbum.getArtists(),
            fakeAlbum.getImages(),
            fakeAlbum.getMarkets(),
            fakeAlbum.getName() as string,
            fakeAlbum.getTotal(),
            fakeAlbum.getType() as string
        )

        expect(album.getId()).toBe(fakeAlbum.getId())
        expect(album.getArtists()).toStrictEqual(fakeAlbum.getArtists())
        expect(album.getImages()).toStrictEqual(fakeAlbum.getImages())
        expect(album.getMarkets()).toBe(fakeAlbum.getMarkets())
        expect(album.getName()).toBe(fakeAlbum.getName())
        expect(album.getTotal()).toBe(fakeAlbum.getTotal())
        expect(album.getType()).toBe(fakeAlbum.getType())
    })
})