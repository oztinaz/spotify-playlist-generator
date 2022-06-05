import { Playlist } from '@/models/playlist'
import { SpotifyImage } from '@/types/spotify-image'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import { ImageMapper } from './image'

export class PlaylistMapper {

    public static spotifyPlaylistToPlaylist(spotifyPlaylist: SpotifyPlaylist): Playlist {
        return new Playlist(
            spotifyPlaylist.id,
            spotifyPlaylist.collaborative,
            spotifyPlaylist.description,
            spotifyPlaylist.images.map((image: SpotifyImage) => {
                return ImageMapper.spotifyImageToImage(image)
            }),
            spotifyPlaylist.name,
            spotifyPlaylist.public,
            spotifyPlaylist.tracks.total,
            []
        )
    }
}