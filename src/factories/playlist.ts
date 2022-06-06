// Models
import { Image } from '@/models/image'
import { Playlist } from '@/models/playlist'
import { Track } from '@/models/track'

export class PlaylistFactory {

    public static create(
        id: string,
        collaborative: boolean,
        description: string,
        images: Array<Image>,
        name: string,
        publicity: boolean,
        total: number,
        tracks: Array<Track>
    ): Playlist {
        const playlist: Playlist = new Playlist()

        playlist.setId(id)
        playlist.setCollaborative(collaborative)
        playlist.setDescription(description)
        playlist.setImages(images)
        playlist.setName(name)
        playlist.setPublicity(publicity)
        playlist.setTotal(total)
        playlist.setTracks(tracks)

        return playlist
    }
}