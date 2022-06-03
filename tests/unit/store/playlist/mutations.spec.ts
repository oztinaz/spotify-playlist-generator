import { Playlist } from '@/models/playlist'
import store from '@/store'

describe('@/store/playlist/mutations.ts', () => {
    it('checks for playlist mutations', () => {
        const fakePlaylists: Array<Playlist> = [
            new Playlist('id1', true, 'desc1', 'href1', 'name1', false),
            new Playlist('id2', false, 'desc2', 'href2', 'name2', true),
        ]

        store.commit('playlist/setPlaylists', fakePlaylists)
        expect(store.state.playlist.playlists).toStrictEqual(fakePlaylists)
    })
})