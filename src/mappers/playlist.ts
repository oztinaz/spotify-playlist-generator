import { Playlist } from '@/models/playlist'
import { SpotifyPlaylist } from '@/types/spotify-playlist'

export class PlaylistMapper {

    public static spotifyPlaylistToPlaylist(spotifyPlaylist: SpotifyPlaylist): Playlist {
        return new Playlist(
            spotifyPlaylist.id,
            spotifyPlaylist.collaborative,
            spotifyPlaylist.description,
            spotifyPlaylist.href,
            spotifyPlaylist.name,
            spotifyPlaylist.public,
        )
    }
}