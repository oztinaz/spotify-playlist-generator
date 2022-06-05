import { Duration } from '@/models/duration'

const fakeHours: number = 1
const fakeMinutes: number = 1
const fakeSeconds: number = 1
const fakeMilliseconds: number = 1

describe('@/models/duration.ts', () => {
    it('checks getters', () => {
        const duration: Duration = new Duration(
            fakeHours,
            fakeMinutes,
            fakeSeconds,
            fakeMilliseconds
        )

        expect(duration.getHours()).toBe(fakeHours)
        expect(duration.getMinutes()).toBe(fakeMinutes)
        expect(duration.getSeconds()).toBe(fakeSeconds)
        expect(duration.getMilliseconds()).toBe(fakeMilliseconds)
    })

    it('checks setters', () => {
        const duration: Duration = new Duration(
            0,
            0,
            0,
            0
        )
        
        duration.setHours(fakeHours)
        expect(duration.getHours()).toBe(fakeHours)

        duration.setMinutes(fakeMinutes)
        expect(duration.getMinutes()).toBe(fakeMinutes)

        duration.setSeconds(fakeSeconds)
        expect(duration.getSeconds()).toBe(fakeSeconds)

        duration.setMilliseconds(fakeMilliseconds)
        expect(duration.getMilliseconds()).toBe(fakeMilliseconds)
    })
})