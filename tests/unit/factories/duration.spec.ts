import { DurationFactory } from '@/factories/duration'
import { Duration } from '@/models/duration'
import { generateFakeDuration } from '@/../tests/fakers/models/duration'

describe('@/factories/duration.ts', () => {
    it('checks create method', () => {
        const fakeDuration: Duration = generateFakeDuration()
        const duration: Duration = DurationFactory.create(
            fakeDuration.getHours(),
            fakeDuration.getMinutes(),
            fakeDuration.getSeconds(),
            fakeDuration.getMilliseconds()
        )

        expect(duration.getHours()).toBe(fakeDuration.getHours())
        expect(duration.getMinutes()).toBe(fakeDuration.getMinutes())
        expect(duration.getSeconds()).toBe(fakeDuration.getSeconds())
        expect(duration.getMilliseconds()).toBe(fakeDuration.getMilliseconds())
    })
})