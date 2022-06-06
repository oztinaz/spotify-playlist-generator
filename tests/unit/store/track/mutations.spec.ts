import { Track } from '@/models/track'
import store from '@/store'
import { generateFakeTrack } from '@/../tests/fakers/models/track'

describe('@/store/track/mutations.ts', () => {
    it('checks for track mutations', () => {
        const fakeRecommendations: Array<Track> = [
            generateFakeTrack(),
            generateFakeTrack(),
        ]

        store.commit('track/setRecommendations', fakeRecommendations)
        expect(store.state.track.recommendations).toStrictEqual(fakeRecommendations)
    })
})