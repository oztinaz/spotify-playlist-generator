import store from '@/store'

describe('store/index.ts', () => {
    it('checks message', () => {
        expect(store.state.message).toBe('Hello, World!')
    })
})