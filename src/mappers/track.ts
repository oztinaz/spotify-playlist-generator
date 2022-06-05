import { Track } from '@/models/track'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyTrack } from '@/types/spotify-track'
import { SpotifyImage } from '@/types/spotify-image'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { DurationMapper } from '@/mappers/duration'
import { ImageMapper } from '@/mappers/image'

export class TrackMapper {

    public static spotifyTrackToTrack(spotifyTrack: SpotifyTrack): Track {
        return new Track(
            spotifyTrack.id,
            AlbumMapper.spotifyAlbumToAlbum(spotifyTrack.album),
            spotifyTrack.artists.map((artist: SpotifyArtist) => {
                return ArtistMapper.spotifyArtistToArtist(artist)
            }),
            DurationMapper.millisecondsToDuration(spotifyTrack.duration_ms),
            spotifyTrack.explicit,
            spotifyTrack.available_markets,
            spotifyTrack.name,
            spotifyTrack.uri
        )
    }
}