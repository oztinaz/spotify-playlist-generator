// Factories
import { AlbumFactory } from '@/factories/album'

// Mappers
import { ArtistMapper } from '@/mappers/artist'
import { ImageMapper } from '@/mappers/image'

// Models
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

// Spotify Types
import { SpotifyAlbum } from '@/types/spotify-album'

export class AlbumMapper {

    public static spotifyAlbumsToAlbums(spotifyAlbums: Array<SpotifyAlbum>): Array<Album> {
        return spotifyAlbums.map((album: SpotifyAlbum) => {
            return AlbumMapper.spotifyAlbumToAlbum(album)
        })
    }

    public static spotifyAlbumToAlbum(spotifyAlbum: SpotifyAlbum): Album {
        const artists: Array<Artist> = ArtistMapper.spotifyArtistsToArtists(spotifyAlbum.artists)
        const images: Array<Image> = ImageMapper.spotifyImagesToImages(spotifyAlbum.images)

        return AlbumFactory.create(
            spotifyAlbum.id,
            artists,
            images,
            spotifyAlbum.available_markets,
            spotifyAlbum.name,
            new Date(spotifyAlbum.release_date),
            spotifyAlbum.total_tracks,
            spotifyAlbum.album_type
        )
    }
}