// Models
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Duration } from '@/models/duration'
import { Track } from '@/models/track'

export class TrackFactory {

    public static create(
        id: string,
        album: Album,
        artists: Array<Artist>,
        duration: Duration,
        explicit: boolean,
        markets: Array<string>,
        name: string,
        uri: string
    ): Track {
        const track: Track = new Track()

        track.setId(id)
        track.setAlbum(album)
        track.setArtists(artists)
        track.setDuration(duration),
        track.setExplicit(explicit)
        track.setMarkets(markets),
        track.setName(name)
        track.setUri(uri)

        return track
    }
}