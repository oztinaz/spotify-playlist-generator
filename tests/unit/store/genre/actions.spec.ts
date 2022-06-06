import { AccessToken } from '@/models/access-token'

import store from '@/store'
import axios from 'axios'

import { generateFakeAccessToken } from '@/../tests/fakers/models/access-token'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('@/store/search/actions.ts', () => {
    it('checks searchItems action', async () => {
        const fakeGenres: Array<string> = ['a', 'b']
        mockedAxios.get.mockResolvedValue({ data: { genres: fakeGenres } })
        const fakeAccessToken: AccessToken = generateFakeAccessToken()
        store.commit('authorization/setAccessToken', fakeAccessToken)

        await store.dispatch('genre/getGenres')

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/recommendations/available-genre-seeds',
            {
                headers: {
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
                }
            } 
        )

        expect(store.state.genre.genres).toHaveLength(2)
        expect(store.state.genre.genres).toStrictEqual(fakeGenres)
    })
})