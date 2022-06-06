// Factories
import { ArtistFactory } from '@/factories/artist'

// Mappers
import { ImageMapper } from '@/mappers/image'

// Models
import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

// Spotify Types
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyImage } from '@/types/spotify-image'

export class ArtistMapper {

    public static spotifyArtistsToArtists(spotifyArtists: Array<SpotifyArtist>): Array<Artist> {
        return spotifyArtists.map((artist: SpotifyArtist) => {
            return ArtistMapper.spotifyArtistToArtist(artist)
        })
    }

    public static spotifyArtistToArtist(spotifyArtist: SpotifyArtist): Artist {
        let images: Array<Image> = []
        if ('images' in spotifyArtist) {
            images = ImageMapper.spotifyImagesToImages(spotifyArtist.images)
        }

        return ArtistFactory.create(
            spotifyArtist.id,
            spotifyArtist.genres,
            images,
            spotifyArtist.name,
            spotifyArtist.uri
        )
    }
}