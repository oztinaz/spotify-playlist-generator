import { Image } from '@/models/image'
import { Artist } from '@/models/artist'

const fakeId: string = 'fakeId'
const fakeGenres: Array<string> = [
    'a',
    'b'
]
const fakeImages: Array<Image> = [
    new Image('url1', 40, 40),
    new Image('url2', 50, 50)
]
const fakeName: string = 'fakeName'
const fakeUri: string = 'fakeUri'

describe('@/models/artist.ts', () => {
    it('checks getters', () => {
        const artist: Artist = new Artist(
            fakeId,
            fakeGenres,
            fakeImages,
            fakeName,
            fakeUri
        )

        expect(artist.getId()).toBe(fakeId)
        expect(artist.getGenres()).toStrictEqual(fakeGenres)
        expect(artist.getImages()).toStrictEqual(fakeImages)
        expect(artist.getName()).toBe(fakeName)
        expect(artist.getUri()).toBe(fakeUri)
    })

    it('checks setters', () => {
        const artist: Artist = new Artist(
            'a',
            [],
            [],
            'a',
            ''
        )

        artist.setId(fakeId)
        expect(artist.getId()).toBe(fakeId)

        artist.setGenres(fakeGenres)
        expect(artist.getGenres()).toStrictEqual(fakeGenres)

        artist.setImages(fakeImages)
        expect(artist.getImages()).toStrictEqual(fakeImages)

        artist.setName(fakeName)
        expect(artist.getName()).toBe(fakeName)

        artist.setUri(fakeUri)
        expect(artist.getUri()).toBe(fakeUri)
    })
})