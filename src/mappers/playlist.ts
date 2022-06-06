// Factories
import { PlaylistFactory } from '@/factories/playlist'
import { Image } from '@/models/image'

// Mappers
import { ImageMapper } from '@/mappers/image'

// Models
import { Playlist } from '@/models/playlist'
import { SpotifyImage } from '@/types/spotify-image'

// Spotify Types
import { SpotifyPlaylist } from '@/types/spotify-playlist'


export class PlaylistMapper {

    public static spotifyPlaylistsToPlaylists(spotifyPlaylists: Array<SpotifyPlaylist>): Array<Playlist> {
        return spotifyPlaylists.map((playlist: SpotifyPlaylist) => {
            return PlaylistMapper.spotifyPlaylistToPlaylist(playlist)
        })
    }

    public static spotifyPlaylistToPlaylist(spotifyPlaylist: SpotifyPlaylist): Playlist {
        const images: Array<Image> = ImageMapper.spotifyImagesToImages(spotifyPlaylist.images)
        
        return PlaylistFactory.create(
            spotifyPlaylist.id,
            spotifyPlaylist.collaborative,
            spotifyPlaylist.description,
            images,
            spotifyPlaylist.name,
            spotifyPlaylist.public,
            spotifyPlaylist.tracks.total,
            []
        )
    }
}