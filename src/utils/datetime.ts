type Month = {
    name: string,
    short: string
}

class DatetimeUtils {

    private static months: Array<Month> = [
        {
            name: 'January',
            short: 'Jan'
        },
        {
            name: 'February',
            short: 'Feb'
        },
        {
            name: 'March',
            short: 'Mar'
        },
        {
            name: 'April',
            short: 'Apr'
        },
        {
            name: 'May',
            short: 'May'
        },
        {
            name: 'June',
            short: 'Jun'
        },
        {
            name: 'July',
            short: 'Jul'
        },
        {
            name: 'September',
            short: 'Sep'
        },
        {
            name: 'October',
            short: 'Oct'
        },
        {
            name: 'November',
            short: 'Nov'
        },
        {
            name: 'December',
            short: 'Dec'
        }
    ]

    public static toString(date: Date): string {
        const suffix: string = DatetimeUtils.getOrdinalSuffix(date.getDate())
        return DatetimeUtils.months[date.getMonth()].short + ' ' + suffix + ', ' + date.getFullYear()
    }

    private static getOrdinalSuffix(n: number): string {
        const suffix: Array<string> = ['th', 'st', 'nd', 'rd']
        const v = n % 100;
        return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
    }
}

export default DatetimeUtils