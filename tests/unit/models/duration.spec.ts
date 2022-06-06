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

    // it('checks convertFromMilliseconds', () => {

    // })
})