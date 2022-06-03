import { PlaylistMapper } from '@/mappers/playlist'
import { Playlist } from '@/models/playlist'
import { SpotifyPlaylist } from '@/types/spotify-playlist'

const mockSpotifyPlaylist: SpotifyPlaylist = {
    id: 'fakeId',
    collaborative: true,
    description: 'fakeDescription',
    href: 'fakeHref',
    name: 'fakeName',
    public: true
}

describe('@/mappers/playlist.ts', () => {
    it('checks spotifyPlaylistToPlaylist method', () => {
        const playlist: Playlist = PlaylistMapper.spotifyPlaylistToPlaylist(mockSpotifyPlaylist)

        expect(playlist.getId()).toBe(mockSpotifyPlaylist.id)
        expect(playlist.isCollaborative()).toBe(mockSpotifyPlaylist.collaborative)
        expect(playlist.getDescription()).toBe(mockSpotifyPlaylist.description)
        expect(playlist.getHref()).toBe(mockSpotifyPlaylist.href)
        expect(playlist.getName()).toBe(mockSpotifyPlaylist.name)
        expect(playlist.isPublic()).toBe(mockSpotifyPlaylist.public)
    })
})