import { Album } from '@/models/album'
import { Duration } from '@/models/duration'
import { Track } from '@/models/track'
import store from '@/store'

describe('@/store/track/mutations.ts', () => {
    it('checks for track mutations', () => {
        const fakeRecommendations: Array<Track> = [
            new Track('', new Album('', [], [], [], '', 0, ''), [], new Duration(0, 0, 0, 0), false, [], '', ''),
            new Track('', new Album('', [], [], [], '', 0, ''), [], new Duration(0, 0, 0, 0), false, [], '', ''),
        ]

        store.commit('track/setRecommendations', fakeRecommendations)
        expect(store.state.track.recommendations).toStrictEqual(fakeRecommendations)
    })
})