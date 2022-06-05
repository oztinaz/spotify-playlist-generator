import { ImageMapper } from '@/mappers/image'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { TrackMapper } from '@/mappers/track'
import { Track } from '@/models/track'
import { SpotifyImage } from '@/types/spotify-image'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyTrack } from '@/types/spotify-track'
import { DurationMapper } from '@/mappers/duration'

const mockSpotifyTrack: SpotifyTrack = {
    id: 'fakeId',
    album: {
        id: '',
        album_type: '',
        artists: [],
        available_markets: ['a', 'b'],
        images: [],
        name: '',
        total_tracks: 0
    },
    artists: [
        {
            id: '',
            genres: [],
            images: [],
            name: '',
            uri: ''
        }
    ],
    available_markets: ['a', 'b'],
    duration_ms: 3721011,
    explicit: true,
    name: 'fakeName',
    uri: 'fakeUri'
}

describe('@/mappers/track.ts', () => {
    it('checks spotifyTrackToTrack method', () => {
        const track: Track = TrackMapper.spotifyTrackToTrack(mockSpotifyTrack)

        expect(track.getId()).toBe(mockSpotifyTrack.id)
        expect(track.getAlbum()).toStrictEqual(AlbumMapper.spotifyAlbumToAlbum(mockSpotifyTrack.album))
        expect(track.getArtists()).toStrictEqual(mockSpotifyTrack.artists.map((artist: SpotifyArtist) => {
            return ArtistMapper.spotifyArtistToArtist(artist)
        }))
        expect(track.getDuration()).toStrictEqual(DurationMapper.millisecondsToDuration(mockSpotifyTrack.duration_ms))
        expect(track.isExplicit()).toBe(mockSpotifyTrack.explicit)
        expect(track.getMarkets()).toBe(mockSpotifyTrack.available_markets)
        expect(track.getName()).toBe(mockSpotifyTrack.name)
        expect(track.getUri()).toBe(mockSpotifyTrack.uri)
    })
})