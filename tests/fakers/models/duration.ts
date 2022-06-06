import { faker } from '@faker-js/faker'

import { Duration } from '@/models/duration'

export function generateFakeDuration(): Duration {
    const duration: Duration = new Duration()
    duration.convertFromMilliseconds(faker.datatype.number({ min: 1000, max: 1000000}))
    return duration
}