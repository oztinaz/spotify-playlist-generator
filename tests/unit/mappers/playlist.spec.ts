// Fakers
import { generateFakeSpotifyPlaylist } from '@/../tests/fakers/spotify/playlist'

// Mappers
import { ImageMapper } from '@/mappers/image'
import { PlaylistMapper } from '@/mappers/playlist'

// Models
import { Playlist } from '@/models/playlist'

// Spotify Types
import { SpotifyPlaylist } from '@/types/spotify-playlist'

describe('@/mappers/playlist.ts', () => {
    it('checks spotifyPlaylistToPlaylist method', () => {
        const fakeSpotifyPlaylist: SpotifyPlaylist = generateFakeSpotifyPlaylist()
        const playlist: Playlist = PlaylistMapper.spotifyPlaylistToPlaylist(fakeSpotifyPlaylist)

        expect(playlist.getId()).toBe(fakeSpotifyPlaylist.id)
        expect(playlist.isCollaborative()).toBe(fakeSpotifyPlaylist.collaborative)
        expect(playlist.getDescription()).toBe(fakeSpotifyPlaylist.description)
        expect(playlist.getImages()).toStrictEqual(ImageMapper.spotifyImagesToImages(fakeSpotifyPlaylist.images))
        expect(playlist.getName()).toBe(fakeSpotifyPlaylist.name)
        expect(playlist.isPublic()).toBe(fakeSpotifyPlaylist.public)
        expect(playlist.getTotal()).toBe(fakeSpotifyPlaylist.tracks.total)
    })
})