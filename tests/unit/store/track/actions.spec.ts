import { AccessToken } from '@/models/access-token'
import { SpotifyTrack } from '@/types/spotify-track'
import store from '@/store'
import axios from 'axios'
import { generateFakeSpotifyTrack } from '@/../tests/fakers/spotify/track'
import { generateFakeAccessToken } from '@/../tests/fakers/models/access-token'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyTrack: SpotifyTrack = generateFakeSpotifyTrack()

describe('@/store/track/actions.ts', () => {
    it('checks getRecomendations action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { tracks: [fakeSpotifyTrack] } })
        const fakeAccessToken: AccessToken = generateFakeAccessToken()
        store.commit('authorization/setAccessToken', fakeAccessToken)

        await store.dispatch('track/getRecommendations', {
            seed_artists: 'a,b,c',
            seed_genres: 'd,e' 
        })

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/recommendations',
            {
                headers: {
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
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