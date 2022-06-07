// Fakers
import { generateFakeSpotifyAlbum } from '@/../tests/fakers/spotify/album'

// Mappers
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { ImageMapper } from '@/mappers/image'

// Models
import { Album } from '@/models/album'

// Spotify Types
import { SpotifyAlbum } from '@/types/spotify-album'

describe('@/mappers/album.ts', () => {
    it('checks spotifyAlbumToAlbum method', () => {
        const fakeSpotifyAlbum: SpotifyAlbum = generateFakeSpotifyAlbum()
        const album: Album = AlbumMapper.spotifyAlbumToAlbum(fakeSpotifyAlbum)

        expect(album.getId()).toBe(fakeSpotifyAlbum.id)
        expect(album.getArtists()).toStrictEqual(ArtistMapper.spotifyArtistsToArtists(fakeSpotifyAlbum.artists))
        expect(album.getImages()).toStrictEqual(ImageMapper.spotifyImagesToImages(fakeSpotifyAlbum.images))
        expect(album.getMarkets()).toBe(fakeSpotifyAlbum.available_markets)
        expect(album.getName()).toBe(fakeSpotifyAlbum.name)
        expect(album.getTotal()).toBe(fakeSpotifyAlbum.total_tracks)
        expect(album.getType()).toBe(fakeSpotifyAlbum.album_type)
    })

    it('checks spotifyAlbumsToAlbums method', () => {
        const fakeSpotifyAlbums: Array<SpotifyAlbum> = [generateFakeSpotifyAlbum()]
        const albums: Array<Album> = AlbumMapper.spotifyAlbumsToAlbums(fakeSpotifyAlbums)

        expect(albums[0].getId()).toStrictEqual(fakeSpotifyAlbums[0].id)
    })
})