import { AccessToken } from '@/models/access-token'
import { Playlist } from '@/models/playlist'
import store from '@/store'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyPlaylist1: SpotifyPlaylist = {
    id: 'id1',
    collaborative: true,
    description: 'desc1',
    href: 'href1',
    name: 'name1',
    public: false
}

const fakeSpotifyPlaylist2: SpotifyPlaylist = {
    id: 'id2',
    collaborative: false,
    description: 'desc2',
    href: 'href2',
    name: 'name2',
    public: true
}

describe('@/store/playlist/actions.ts', () => {
    it('checks getPlaylist action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { items: [fakeSpotifyPlaylist1, fakeSpotifyPlaylist2] } })
        const mockAccessToken: AccessToken = new AccessToken('token', new Date(), ['a', 'b'])
        store.commit('authorization/setAccessToken', mockAccessToken)

        await store.dispatch('playlist/getPlaylists')

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                }
            } 
        )

        expect(store.state.playlist.playlists).toHaveLength(2)
        expect(store.state.playlist.playlists[0].getId()).toBe(fakeSpotifyPlaylist1.id)
        expect(store.state.playlist.playlists[1].getId()).toBe(fakeSpotifyPlaylist2.id)
    })
})