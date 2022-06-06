import { Playlist } from '@/models/playlist'
import store from '@/store'
import { generateFakePlaylist } from '@/../tests/fakers/models/playlist'

describe('@/store/playlist/mutations.ts', () => {
    it('checks for playlist mutations', () => {
        const fakePlaylists: Array<Playlist> = [
            generateFakePlaylist(),
            generateFakePlaylist(),
        ]

        store.commit('playlist/setPlaylists', fakePlaylists)
        expect(store.state.playlist.playlists).toStrictEqual(fakePlaylists)
    })
})