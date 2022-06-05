import { AccessToken } from '@/models/access-token'
import { SpotifyTrack } from '@/types/spotify-track'
import store from '@/store'
import axios from 'axios'
import { TrackMapper } from '@/mappers/track'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyAlbum: SpotifyAlbum = {
    id: '',
    album_type: '',
    artists: [],
    available_markets: [],
    images: [],
    name: '',
    total_tracks: 0
}

const fakeSpotifyArtist: SpotifyArtist = {
    id: '',
    genres: [],
    images: [],
    name: '',
    uri: ''
}

const fakeSpotifyTrack: SpotifyTrack = {
    id: 'id1',
    album: {
        id: '',
        album_type: '',
        artists: [],
        available_markets: [],
        images: [],
        name: '',
        total_tracks: 0
    },
    artists: [],
    duration_ms: 0,
    explicit: false,
    available_markets: [],
    name: '',
    uri: ''
}

describe('@/store/search/actions.ts', () => {
    it('checks searchItems action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { albums: { items: [fakeSpotifyAlbum] }, artists: { items: [fakeSpotifyArtist] }, tracks: { items: [fakeSpotifyTrack] } } })
        const mockAccessToken: AccessToken = new AccessToken('token', new Date(), ['a', 'b'])
        store.commit('authorization/setAccessToken', mockAccessToken)

        await store.dispatch('search/searchItems', {
            q: 'fakeQuery',
            type: 'fakeType',
            limit: 4
        })

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/search',
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                },
                params: {
                    q: 'fakeQuery',
                    type: 'fakeType',
                    limit: 4
                }
            } 
        )

        expect(store.state.search.searchedItems).toStrictEqual({
            albums: [AlbumMapper.spotifyAlbumToAlbum(fakeSpotifyAlbum)],
            artists: [ArtistMapper.spotifyArtistToArtist(fakeSpotifyArtist)],
            tracks: [TrackMapper.spotifyTrackToTrack(fakeSpotifyTrack)]
        })
    })
})