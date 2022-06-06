// Fakers
import { generateFakeArtist } from '@/../tests/fakers/models/artist'

// Models
import { Artist } from '@/models/artist'

describe('@/models/artist.ts', () => {
    it('checks getters and setters', () => {
        const fakeArtists: Artist = generateFakeArtist()
        const artist: Artist = new Artist()

        artist.setId(fakeArtists.getId())
        expect(artist.getId()).toBe(fakeArtists.getId())

        artist.setGenres(fakeArtists.getGenres())
        expect(artist.getGenres()).toStrictEqual(fakeArtists.getGenres())

        artist.setImages(fakeArtists.getImages())
        expect(artist.getImages()).toStrictEqual(fakeArtists.getImages())

        artist.setName(fakeArtists.getName())
        expect(artist.getName()).toBe(fakeArtists.getName())

        artist.setUri(fakeArtists.getUri())
        expect(artist.getUri()).toBe(fakeArtists.getUri())
    })
})