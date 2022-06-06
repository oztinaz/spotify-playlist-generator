// Models
import { Duration } from '@/models/duration'

export class DurationFactory {
    
    public static create(
        hours: number,
        minutes: number,
        seconds: number,
        milliseconds: number
    ): Duration {
        const duration: Duration = new Duration()

        duration.setHours(hours)
        duration.setMinutes(minutes)
        duration.setSeconds(seconds)
        duration.setMilliseconds(milliseconds)

        return duration
    }
}