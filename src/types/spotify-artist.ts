import { SpotifyImage } from '@/types/spotify-image'

export type SpotifyArtist = {
    id: string,
    genres: Array<string>,
    images: Array<SpotifyImage>,
    name: string,
    uri: string
}