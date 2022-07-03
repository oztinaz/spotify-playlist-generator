// Fakers
import { generateFakeAlbum } from '@/../tests/fakers/models/album'

// Models
import { Album } from '@/models/album'

describe('@/models/album.ts', () => {
    it('checks getters and setters', () => {
        const fakeAlbum: Album = generateFakeAlbum()
        const album: Album = new Album()

        album.setId(fakeAlbum.getId())
        expect(album.getId()).toBe(fakeAlbum.getId())

        album.setArtists(fakeAlbum.getArtists())
        expect(album.getArtists()).toStrictEqual(fakeAlbum.getArtists())

        album.setImages(fakeAlbum.getImages())
        expect(album.getImages()).toStrictEqual(fakeAlbum.getImages())

        album.setMarkets(fakeAlbum.getMarkets())
        expect(album.getMarkets()).toStrictEqual(fakeAlbum.getMarkets())

        album.setName(fakeAlbum.getName())
        expect(album.getName()).toBe(fakeAlbum.getName())

        album.setReleaseDate(fakeAlbum.getReleaseDate())
        expect(album.getReleaseDate()).toBe(fakeAlbum.getReleaseDate())

        album.setTotal(fakeAlbum.getTotal())
        expect(album.getTotal()).toBe(fakeAlbum.getTotal())

        album.setType(fakeAlbum.getType())
        expect(album.getType()).toBe(fakeAlbum.getType())
    })
})