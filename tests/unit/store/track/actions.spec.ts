import { AccessToken } from '@/models/access-token'
import { SpotifyTrack } from '@/types/spotify-track'
import store from '@/store'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

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

describe('@/store/track/actions.ts', () => {
    it('checks getRecomendations action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { tracks: [fakeSpotifyTrack] } })
        const mockAccessToken: AccessToken = new AccessToken('token', new Date(), ['a', 'b'])
        store.commit('authorization/setAccessToken', mockAccessToken)

        await store.dispatch('track/getRecommendations', {
            seed_artists: 'a,b,c',
            seed_genres: 'd,e' 
        })

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/recommendations',
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                },
                params: {
                    seed_artists: 'a,b,c',
                    seed_genres: 'd,e' 
                }
            } 
        )

        expect(store.state.track.recommendations).toHaveLength(1)
        expect(store.state.track.recommendations[0].getId()).toBe(fakeSpotifyTrack.id)
    })
})