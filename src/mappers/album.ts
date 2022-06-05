import { Album } from '@/models/album'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyImage } from '@/types/spotify-image'
import { ArtistMapper } from '@/mappers/artist'
import { ImageMapper } from '@/mappers/image'

export class AlbumMapper {

    public static spotifyAlbumToAlbum(spotifyAlbum: SpotifyAlbum): Album {
        return new Album(
            spotifyAlbum.id,
            spotifyAlbum.artists.map((artist: SpotifyArtist) => {
                return ArtistMapper.spotifyArtistToArtist(artist)
            }),
            spotifyAlbum.images.map((image: SpotifyImage) => {
                return ImageMapper.spotifyImageToImage(image)
            }),
            spotifyAlbum.available_markets,
            spotifyAlbum.name,
            spotifyAlbum.total_tracks,
            spotifyAlbum.album_type
        )
    }
}