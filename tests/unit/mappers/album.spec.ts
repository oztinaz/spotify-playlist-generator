import { ImageMapper } from '@/mappers/image'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { Album } from '@/models/album'
import { SpotifyImage } from '@/types/spotify-image'
import { SpotifyArtist } from '@/types/spotify-artist'
import { SpotifyAlbum } from '@/types/spotify-album'

const mockSpotifyAlbum: SpotifyAlbum = {
    id: 'fakeId',
    album_type: 'type',
    artists: [
        {
            id: '',
            genres: [],
            images: [],
            name: '',
            uri: ''
        }
    ],
    available_markets: ['a', 'b'],
    images: [
        {
            url: 'url',
            height: 40,
            width: 40
        }
    ],
    name: 'fakeName',
    total_tracks: 10
}

describe('@/mappers/album.ts', () => {
    it('checks spotifyAlbumToAlbum method', () => {
        const album: Album = AlbumMapper.spotifyAlbumToAlbum(mockSpotifyAlbum)

        expect(album.getId()).toBe(mockSpotifyAlbum.id)
        expect(album.getArtists()).toStrictEqual(mockSpotifyAlbum.artists.map((artist: SpotifyArtist) => {
            return ArtistMapper.spotifyArtistToArtist(artist)
        }))
        expect(album.getImages()).toStrictEqual(mockSpotifyAlbum.images.map((image: SpotifyImage) => {
            return ImageMapper.spotifyImageToImage(image)
        }))
        expect(album.getMarkets()).toBe(mockSpotifyAlbum.available_markets)
        expect(album.getName()).toBe(mockSpotifyAlbum.name)
        expect(album.getTotal()).toBe(mockSpotifyAlbum.total_tracks)
        expect(album.getType()).toBe(mockSpotifyAlbum.album_type)
    })
})