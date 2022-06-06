import { AccessToken } from '@/models/access-token'
import { SpotifyTrack } from '@/types/spotify-track'
import store from '@/store'
import axios from 'axios'
import { TrackMapper } from '@/mappers/track'
import { SpotifyAlbum } from '@/types/spotify-album'
import { SpotifyArtist } from '@/types/spotify-artist'
import { AlbumMapper } from '@/mappers/album'
import { ArtistMapper } from '@/mappers/artist'
import { generateFakeSpotifyAlbum } from '@/../tests/fakers/spotify/album'
import { generateFakeSpotifyArtist } from '@/../tests/fakers/spotify/artist'
import { generateFakeSpotifyTrack } from '@/../tests/fakers/spotify/track'
import { generateFakeAccessToken } from '@/../tests/fakers/models/access-token'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyAlbum: SpotifyAlbum = generateFakeSpotifyAlbum()

const fakeSpotifyArtist: SpotifyArtist = generateFakeSpotifyArtist()

const fakeSpotifyTrack: SpotifyTrack = generateFakeSpotifyTrack()

describe('@/store/search/actions.ts', () => {
    it('checks searchItems action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { albums: { items: [fakeSpotifyAlbum] }, artists: { items: [fakeSpotifyArtist] }, tracks: { items: [fakeSpotifyTrack] } } })
        const fakeAccessToken: AccessToken = generateFakeAccessToken()
        store.commit('authorization/setAccessToken', fakeAccessToken)

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
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
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