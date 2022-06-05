import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyImage } from '@/types/spotify-image'

export type SpotifyAlbum = {
    id: string,
    artists: Array<SpotifyArtist>,
    images: Array<SpotifyImage>,
    available_markets: Array<string>,
    name: string,
    total_tracks: number,
    album_type: string
}