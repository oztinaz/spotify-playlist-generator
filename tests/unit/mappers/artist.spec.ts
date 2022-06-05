import { ImageMapper } from '@/mappers/image'
import { ArtistMapper } from '@/mappers/artist'
import { Artist } from '@/models/artist'
import { SpotifyImage } from '@/types/spotify-image'
import { SpotifyArtist } from '@/types/spotify-artist'

const mockSpotifyArtist: SpotifyArtist = {
    id: 'fakeId',
    genres: [
        'a',
        'b'
    ],
    images: [
        {
            url: 'url',
            height: 40,
            width: 40
        }
    ],
    name: 'fakeName',
    uri: 'fakeUri'
}

describe('@/mappers/artist.ts', () => {
    it('checks spotifyArtistToArtist method', () => {
        const artist: Artist = ArtistMapper.spotifyArtistToArtist(mockSpotifyArtist)

        expect(artist.getId()).toBe(mockSpotifyArtist.id)
        expect(artist.getGenres()).toStrictEqual(mockSpotifyArtist.genres)
        expect(artist.getImages()).toStrictEqual(mockSpotifyArtist.images.map((image: SpotifyImage) => {
            return ImageMapper.spotifyImageToImage(image)
        }))
        expect(artist.getName()).toBe(mockSpotifyArtist.name)
        expect(artist.getUri()).toBe(mockSpotifyArtist.uri)
    })
})