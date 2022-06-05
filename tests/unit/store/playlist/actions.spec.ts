import { AccessToken } from '@/models/access-token'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import store from '@/store'
import axios from 'axios'
import { Playlist } from '@/models/playlist'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyPlaylist1: SpotifyPlaylist = {
    id: 'id1',
    collaborative: true,
    description: 'desc1',
    images: [],
    name: 'name1',
    public: false,
    tracks: {
        total: 0
    }
}

const fakeSpotifyPlaylist2: SpotifyPlaylist = {
    id: 'id2',
    collaborative: false,
    description: 'desc2',
    images: [],
    name: 'name2',
    public: true,
    tracks: {
        total: 0
    }
}

const mockAccessToken: AccessToken = new AccessToken('token', new Date(), ['a', 'b'])
store.commit('authorization/setAccessToken', mockAccessToken)

describe('@/store/playlist/actions.ts', () => {
    it('checks getPlaylist action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { items: [fakeSpotifyPlaylist1, fakeSpotifyPlaylist2] } })

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
    
    it('checks createPlaylist action', async () => {
        const fakePlaylist: Playlist = new Playlist('', true, '', [], '', true, 0, [])
        const fakeSpotifyPlaylist: SpotifyPlaylist = {
            id: '',
            collaborative: fakePlaylist.isCollaborative(),
            description: fakePlaylist.getDescription(),
            name: fakePlaylist.getName(),
            images: [
                {
                    url: '',
                    height: 0,
                    width: 0
                }
            ],
            public: fakePlaylist.isPublic(),
            tracks: {
                total: 0
            }
        }
        mockedAxios.post.mockResolvedValue({ data: fakeSpotifyPlaylist })

        await store.dispatch('playlist/createPlaylist', {
            userId: '111',
            playlist: fakePlaylist
        })

        expect(mockedAxios.post).toBeCalledTimes(1)
        expect(mockedAxios.post).toBeCalledWith(
            'https://api.spotify.com/v1/users/111/playlists',
            {
                name: fakePlaylist.getName(),
                public: fakePlaylist.isPublic(),
                collaborative: fakePlaylist.isCollaborative(),
                description: fakePlaylist.getDescription()
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                }
            } 
        )

        expect(store.state.playlist.createdPlaylist?.getName()).toBe(fakeSpotifyPlaylist.name)
    })
    
    it('checks addItemsToPlaylist action', async () => {
        const fakePlaylist: Playlist = new Playlist('fakeId', true, '', [], '', true, 0, [])
        store.commit('playlist/setCreatedPlaylist', fakePlaylist)
        mockedAxios.post.mockResolvedValue({ data: { snapshot_id: 'fakeString' } })

        await store.dispatch('playlist/addItemsToPlaylist', [
            'fakeUri'
        ])

        expect(mockedAxios.post).toBeCalledTimes(2)
        expect(mockedAxios.post).toBeCalledWith(
            'https://api.spotify.com/v1/playlists/fakeId/tracks',
            {
                uris: ['fakeUri']
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + mockAccessToken.getToken()
                }
            } 
        )
    })
})