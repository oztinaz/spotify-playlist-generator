import { Track } from '@/models/track'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyTrack } from '@/types/spotify-track'
import { SpotifyImage } from '@/types/spotify-image'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { ImageMapper } from '@/mappers/image'
import { TrackFactory } from '@/factories/track'
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Duration } from '@/models/duration'

export class TrackMapper {

    public static spotifyTracksToTracks(spotifyTracks: Array<SpotifyTrack>): Array<Track> {
        return spotifyTracks.map((track: SpotifyTrack) => {
            return TrackMapper.spotifyTrackToTrack(track)
        })
    }

    public static spotifyTrackToTrack(spotifyTrack: SpotifyTrack): Track {
        const album: Album = AlbumMapper.spotifyAlbumToAlbum(spotifyTrack.album)
        const artists: Array<Artist> = ArtistMapper.spotifyArtistsToArtists(spotifyTrack.artists)
        
        const duration: Duration = new Duration()
        duration.convertFromMilliseconds(spotifyTrack.duration_ms)
        
        return TrackFactory.create(
            spotifyTrack.id,
            album,
            artists,
            duration,
            spotifyTrack.explicit,
            spotifyTrack.available_markets,
            spotifyTrack.name,
            spotifyTrack.uri
        )
    }
}