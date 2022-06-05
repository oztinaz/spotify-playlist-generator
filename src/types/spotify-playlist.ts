import { SpotifyImage } from '@/types/spotify-image'

export type SpotifyPlaylist = {
    id: string,
    collaborative: boolean,
    description: string,
    name: string,
    public: boolean,
    images: Array<SpotifyImage>,
    tracks: {
        total: number
    }
}