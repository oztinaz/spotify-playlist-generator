import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

const fakeId: string = 'fakeId'
const fakeArtists: Array<Artist> = [
    new Artist('', [], [], '', ''),
    new Artist('', [], [], '', '')
]
const fakeImages: Array<Image> = [
    new Image('url1', 40, 40),
    new Image('url2', 50, 50)
]
const fakeMarkets: Array<string> = ['a', 'b']
const fakeName: string = 'fakeName'
const fakeTotal: number = 10
const fakeType: string = 'fakeType'

describe('@/models/album.ts', () => {
    it('checks getters', () => {
        const artist: Album = new Album(
            fakeId,
            fakeArtists,
            fakeImages,
            fakeMarkets,
            fakeName,
            fakeTotal,
            fakeType
        )

        expect(artist.getId()).toBe(fakeId)
        expect(artist.getArtists()).toStrictEqual(fakeArtists)
        expect(artist.getImages()).toStrictEqual(fakeImages)
        expect(artist.getMarkets()).toStrictEqual(fakeMarkets)
        expect(artist.getName()).toBe(fakeName)
        expect(artist.getTotal()).toBe(fakeTotal)
        expect(artist.getType()).toBe(fakeType)
    })

    it('checks setters', () => {
        const album: Album = new Album(
            'a',
            fakeArtists,
            [],
            [],
            'a',
            0,
            'a'
        )

        album.setId(fakeId)
        expect(album.getId()).toBe(fakeId)

        album.setArtists(fakeArtists)
        expect(album.getArtists()).toStrictEqual(fakeArtists)

        album.setImages(fakeImages)
        expect(album.getImages()).toStrictEqual(fakeImages)

        album.setMarkets(fakeMarkets)
        expect(album.getMarkets()).toStrictEqual(fakeMarkets)

        album.setName(fakeName)
        expect(album.getName()).toBe(fakeName)

        album.setTotal(fakeTotal)
        expect(album.getTotal()).toBe(fakeTotal)

        album.setType(fakeType)
        expect(album.getType()).toBe(fakeType)
    })
})