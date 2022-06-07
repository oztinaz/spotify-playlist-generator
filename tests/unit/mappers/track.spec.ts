// Fakers
import { generateFakeSpotifyTrack } from '@/../tests/fakers/spotify/track'

// Mappers
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { TrackMapper } from '@/mappers/track'

// Models
import { Duration } from '@/models/duration'
import { Track } from '@/models/track'

// Spotify Types
import { SpotifyTrack } from '@/types/spotify-track'

describe('@/mappers/track.ts', () => {
    it('checks spotifyTrackToTrack method', () => {
        const fakeSpotifyTrack: SpotifyTrack = generateFakeSpotifyTrack()
        const track: Track = TrackMapper.spotifyTrackToTrack(fakeSpotifyTrack)
        const duration: Duration = new Duration
        duration.convertFromMilliseconds(fakeSpotifyTrack.duration_ms)

        expect(track.getId()).toBe(fakeSpotifyTrack.id)
        expect(track.getAlbum()).toStrictEqual(AlbumMapper.spotifyAlbumToAlbum(fakeSpotifyTrack.album))
        expect(track.getArtists()).toStrictEqual(ArtistMapper.spotifyArtistsToArtists(fakeSpotifyTrack.artists))
        expect(track.getDuration()).toStrictEqual(duration)
        expect(track.isExplicit()).toBe(fakeSpotifyTrack.explicit)
        expect(track.getMarkets()).toBe(fakeSpotifyTrack.available_markets)
        expect(track.getName()).toBe(fakeSpotifyTrack.name)
        expect(track.getUri()).toBe(fakeSpotifyTrack.uri)
    })

    it('checks spotifyImagesToImages method', () => {
        const fakeSpotifyTracks: Array<SpotifyTrack> = [generateFakeSpotifyTrack()]
        const tracks: Array<Track> = TrackMapper.spotifyTracksToTracks(fakeSpotifyTracks)

        expect(tracks[0].getId()).toStrictEqual(fakeSpotifyTracks[0].id)
    })
})