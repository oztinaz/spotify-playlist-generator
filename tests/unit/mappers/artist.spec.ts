// Fakers
import { generateFakeSpotifyArtist } from '@/../tests/fakers/spotify/artist'

// Mappers
import { ArtistMapper } from '@/mappers/artist'
import { ImageMapper } from '@/mappers/image'

// Models
import { Artist } from '@/models/artist'

// Spotify Types
import { SpotifyArtist } from '@/types/spotify-artist'

describe('@/mappers/artist.ts', () => {
    it('checks spotifyArtistToArtist method', () => {
        const fakeSpotifyArtist: SpotifyArtist = generateFakeSpotifyArtist()
        const artist: Artist = ArtistMapper.spotifyArtistToArtist(fakeSpotifyArtist)

        expect(artist.getId()).toBe(fakeSpotifyArtist.id)
        expect(artist.getGenres()).toStrictEqual(fakeSpotifyArtist.genres)
        expect(artist.getImages()).toStrictEqual(ImageMapper.spotifyImagesToImages(fakeSpotifyArtist.images))
        expect(artist.getName()).toBe(fakeSpotifyArtist.name)
        expect(artist.getUri()).toBe(fakeSpotifyArtist.uri)
    })

    it('checks spotifyArtistsToArtists method', () => {
        const fakeSpotifyArtists: Array<SpotifyArtist> = [generateFakeSpotifyArtist()]
        const artists: Array<Artist> = ArtistMapper.spotifyArtistsToArtists(fakeSpotifyArtists)

        expect(artists[0].getId()).toStrictEqual(fakeSpotifyArtists[0].id)
    })
})