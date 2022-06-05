import { Artist } from '@/models/artist'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyImage } from '@/types/spotify-image'
import { ImageMapper } from '@/mappers/image'

export class ArtistMapper {

    public static spotifyArtistToArtist(spotifyArtist: SpotifyArtist): Artist {
        return new Artist(
            spotifyArtist.id,
            spotifyArtist.genres,
            spotifyArtist.images?.map((image: SpotifyImage) => {
                return ImageMapper.spotifyImageToImage(image)
            }),
            spotifyArtist.name,
            spotifyArtist.uri
        )
    }
}