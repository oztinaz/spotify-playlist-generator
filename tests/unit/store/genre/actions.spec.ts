import { AccessToken } from '@/models/access-token'

import store from '@/store'
import axios from 'axios'


jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('@/store/search/actions.ts', () => {
    it('checks searchItems action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { genres: ['a', 'b'] } })
        const mockAccessToken: AccessToken = new AccessToken('token', new Date(), ['a', 'b'])
        store.commit('authorization/setAccessToken', mockAccessToken)

        await store.dispatch('genre/getGenres')

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/recommendations/available-genre-seeds',
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                }
            } 
        )

        expect(store.state.genre.genres).toHaveLength(2)
        expect(store.state.genre.genres).toStrictEqual(['a', 'b'])
    })
})