export class Duration {

    private hours: number

    private minutes: number

    private seconds: number

    private milliseconds: number

    constructor(hours: number, minutes: number, seconds: number, milliseconds: number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.milliseconds = milliseconds
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
}