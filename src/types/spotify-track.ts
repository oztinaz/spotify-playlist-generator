import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyAlbum } from '@/types/spotify-album'

export type SpotifyTrack = {
    id: string,
    album: SpotifyAlbum,
    artists: Array<SpotifyArtist>,
    duration_ms: number,
    explicit: boolean,
    available_markets: Array<string>,
    name: string,
    uri: string
}