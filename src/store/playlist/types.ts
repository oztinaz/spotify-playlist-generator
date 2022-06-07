import { Playlist } from '@/models/playlist'

export type State = {
    playlists: Array<Playlist>,
    createdPlaylist: Playlist
}