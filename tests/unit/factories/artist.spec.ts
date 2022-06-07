import { ArtistFactory } from '@/factories/artist'
import { Artist } from '@/models/artist'
import { generateFakeArtist } from '@/../tests/fakers/models/artist'

describe('@/factories/artist.ts', () => {
    it('checks create method', () => {
        const fakeArtist: Artist = generateFakeArtist()
        const artist: Artist = ArtistFactory.create(
            fakeArtist.getId() as string,
            fakeArtist.getGenres(),
            fakeArtist.getImages(),
            fakeArtist.getName() as string,
            fakeArtist.getUri() as string
        )

        expect(artist.getId()).toBe(fakeArtist.getId())
        expect(artist.getGenres()).toStrictEqual(fakeArtist.getGenres())
        expect(artist.getImages()).toStrictEqual(fakeArtist.getImages())
        expect(artist.getName()).toBe(fakeArtist.getName())
        expect(artist.getUri()).toBe(fakeArtist.getUri())
    })
})