import { AccessToken } from '@/models/access-token'
import { SpotifyPlaylist } from '@/types/spotify-playlist'
import store from '@/store'
import axios from 'axios'
import { Playlist } from '@/models/playlist'
import { generateFakeSpotifyPlaylist } from '@/../tests/fakers/spotify/playlist'
import { generateFakeAccessToken } from '@/../tests/fakers/models/access-token'
import { generateFakePlaylist } from '@/../tests/fakers/models/playlist'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fakeSpotifyPlaylist1: SpotifyPlaylist = generateFakeSpotifyPlaylist()
const fakeSpotifyPlaylist2: SpotifyPlaylist = generateFakeSpotifyPlaylist()

const fakeAccessToken: AccessToken = generateFakeAccessToken()
store.commit('authorization/setAccessToken', fakeAccessToken)

describe('@/store/playlist/actions.ts', () => {
    it('checks getPlaylist action', async () => {
        mockedAxios.get.mockResolvedValue({ data: { items: [fakeSpotifyPlaylist1, fakeSpotifyPlaylist2] } })

        await store.dispatch('playlist/getPlaylists')

        expect(mockedAxios.get).toBeCalledTimes(1)
        expect(mockedAxios.get).toBeCalledWith(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: {
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
                }
            } 
        )

        expect(store.state.playlist.playlists).toHaveLength(2)
        expect(store.state.playlist.playlists[0].getId()).toBe(fakeSpotifyPlaylist1.id)
        expect(store.state.playlist.playlists[1].getId()).toBe(fakeSpotifyPlaylist2.id)
    })
    
    it('checks createPlaylist action', async () => {
        const fakePlaylist: Playlist = generateFakePlaylist()
        mockedAxios.post.mockResolvedValue({ data: fakeSpotifyPlaylist1 })

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
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
                }
            } 
        )

        expect(store.state.playlist.createdPlaylist?.getName()).toBe(fakeSpotifyPlaylist1.name)
    })
    
    it('checks addItemsToPlaylist action', async () => {
        const fakePlaylist: Playlist = generateFakePlaylist()
        store.commit('playlist/setCreatedPlaylist', fakePlaylist)
        mockedAxios.post.mockResolvedValue({ data: { snapshot_id: 'fakeString' } })

        await store.dispatch('playlist/addItemsToPlaylist', [
            'fakeUri'
        ])

        expect(mockedAxios.post).toBeCalledTimes(2)
        expect(mockedAxios.post).toBeCalledWith(
            'https://api.spotify.com/v1/playlists/' + fakePlaylist.getId() + '/tracks',
            {
                uris: ['fakeUri']
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + fakeAccessToken.getToken()
                }
            } 
        )
    })
})