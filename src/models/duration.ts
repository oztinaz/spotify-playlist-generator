export class Duration {

    private hours: number

    private minutes: number

    private seconds: number

    private milliseconds: number

    constructor() {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.milliseconds = 0
    }

    public getHours(): number {
        return this.hours
    }

    public setHours(hours: number): void {
        this.hours = hours
    }

    public getMinutes(): number {
        return this.minutes
    }

    public setMinutes(minutes: number): void {
        this.minutes = minutes
    }

    public getSeconds(): number {
        return this.seconds
    }

    public setSeconds(seconds: number): void {
        this.seconds = seconds
    }

    public getMilliseconds(): number {
        return this.milliseconds
    }

    public setMilliseconds(milliseconds: number): void {
        this.milliseconds = milliseconds
    }

    public convertFromMilliseconds(milliseconds: number): void {
        let seconds = 0
        let minutes = 0
        let hours = 0

        if (milliseconds < 1000) {
            this.setMilliseconds(milliseconds)
            return
        }

        this.setMilliseconds(milliseconds % 1000)
        seconds = Math.floor(milliseconds / 1000)

        if (seconds < 60) {
            this.setSeconds(seconds)
            return
        }

        this.setSeconds(seconds % 60)
        minutes = Math.floor(seconds / 60)

        if (minutes < 60) {
            this.setMinutes(minutes)
            return
        }

        this.setMinutes(minutes % 60)
        hours = Math.floor(minutes / 60)
        
        this.setHours(hours)
    }
}