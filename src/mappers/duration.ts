import { Duration } from '@/models/duration'

export class DurationMapper {

    public static millisecondsToDuration(milliseconds: number): Duration {
        let seconds = 0
        let minutes = 0
        let hours = 0
        
        const duration: Duration = new Duration(0, 0, 0, 0)

        if (milliseconds < 1000) {
            duration.setMilliseconds(milliseconds)
            return duration
        }

        duration.setMilliseconds(milliseconds % 1000)
        seconds = Math.floor(milliseconds / 1000)

        if (seconds < 60) {
            duration.setSeconds(seconds)
            return duration
        }

        duration.setSeconds(seconds % 60)
        minutes = Math.floor(seconds / 60)

        if (minutes < 60) {
            duration.setMinutes(minutes)
            return duration
        }

        duration.setMinutes(minutes % 60)
        hours = Math.floor(minutes / 60)
        
        duration.setHours(hours)
        return duration
    }
}