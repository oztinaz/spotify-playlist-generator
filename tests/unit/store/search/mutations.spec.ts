import store from '@/store'
import { SearchedItems } from '@/store/search/types'

describe('@/store/search/mutations.ts', () => {
    it('checks for track mutations', () => {
        const fakeSearchItems: SearchedItems = {
            albums: [],
            artists: [],
            tracks: []
        }

        store.commit('search/setSearchedItems', fakeSearchItems)
        expect(store.state.search.searchedItems).toStrictEqual(fakeSearchItems)
    })
})