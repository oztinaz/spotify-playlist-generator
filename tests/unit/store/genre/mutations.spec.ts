import store from '@/store'

describe('@/store/genre/mutations.ts', () => {
    it('checks for track mutations', () => {
        const fakeGenres: Array<string> = [
            'a',
            'b'
        ]

        store.commit('genre/setGenres', fakeGenres)
        expect(store.state.genre.genres).toStrictEqual(fakeGenres)
    })
})