// Fakers
import { generateFakeDuration } from '@/../tests/fakers/models/duration'

// Models
import { Duration } from '@/models/duration'

describe('@/models/duration.ts', () => {
    it('checks getters and setters', () => {
        const fakeDuration: Duration = generateFakeDuration()
        const duration: Duration = new Duration()
        
        duration.setHours(fakeDuration.getHours())
        expect(duration.getHours()).toBe(fakeDuration.getHours())

        duration.setMinutes(fakeDuration.getMinutes())
        expect(duration.getMinutes()).toBe(fakeDuration.getMinutes())

        duration.setSeconds(fakeDuration.getSeconds())
        expect(duration.getSeconds()).toBe(fakeDuration.getSeconds())

        duration.setMilliseconds(fakeDuration.getMilliseconds())
        expect(duration.getMilliseconds()).toBe(fakeDuration.getMilliseconds())
    })

    it('checks convertFromMilliseconds', () => {
        const duration: Duration = new Duration()

        duration.convertFromMilliseconds(900)
        expect(duration.getHours()).toBe(0)
        expect(duration.getMinutes()).toBe(0)
        expect(duration.getSeconds()).toBe(0)
        expect(duration.getMilliseconds()).toBe(900)
        
        duration.convertFromMilliseconds(1010)
        expect(duration.getHours()).toBe(0)
        expect(duration.getMinutes()).toBe(0)
        expect(duration.getSeconds()).toBe(1)
        expect(duration.getMilliseconds()).toBe(10)
        
        duration.convertFromMilliseconds(61109)
        expect(duration.getHours()).toBe(0)
        expect(duration.getMinutes()).toBe(1)
        expect(duration.getSeconds()).toBe(1)
        expect(duration.getMilliseconds()).toBe(109)
        
        duration.convertFromMilliseconds(3600000)
        expect(duration.getHours()).toBe(1)
        expect(duration.getMinutes()).toBe(0)
        expect(duration.getSeconds()).toBe(0)
        expect(duration.getMilliseconds()).toBe(0)
    })
})