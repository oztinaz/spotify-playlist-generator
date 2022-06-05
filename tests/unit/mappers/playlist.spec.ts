import { ImageMapper } from '@/mappers/image'
import { PlaylistMapper } from '@/mappers/playlist'
import { Playlist } from '@/models/playlist'
import { SpotifyImage } from '@/types/spotify-image'
import { SpotifyPlaylist } from '@/types/spotify-playlist'

const mockSpotifyPlaylist: SpotifyPlaylist = {
    id: 'fakeId',
    collaborative: true,
    description: 'fakeDescription',
    images: [
        {
            url: 'url',
            height: 40,
            width: 40
        }
    ],
    name: 'fakeName',
    public: true,
    tracks: {
        total: 20
    }
}

describe('@/mappers/playlist.ts', () => {
    it('checks spotifyPlaylistToPlaylist method', () => {
        const playlist: Playlist = PlaylistMapper.spotifyPlaylistToPlaylist(mockSpotifyPlaylist)

        expect(playlist.getId()).toBe(mockSpotifyPlaylist.id)
        expect(playlist.isCollaborative()).toBe(mockSpotifyPlaylist.collaborative)
        expect(playlist.getDescription()).toBe(mockSpotifyPlaylist.description)
        expect(playlist.getImages()).toStrictEqual(mockSpotifyPlaylist.images.map((image: SpotifyImage) => {
            return ImageMapper.spotifyImageToImage(image)
        }))
        expect(playlist.getName()).toBe(mockSpotifyPlaylist.name)
        expect(playlist.isPublic()).toBe(mockSpotifyPlaylist.public)
        expect(playlist.getTotal()).toBe(mockSpotifyPlaylist.tracks.total)
    })
})