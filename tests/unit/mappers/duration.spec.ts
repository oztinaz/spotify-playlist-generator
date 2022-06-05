import { DurationMapper } from '@/mappers/duration'
import { Duration } from '@/models/duration'

describe('@/mappers/duration.ts', () => {
    it('checks millisecondsToDuration method', () => {
        expect(DurationMapper.millisecondsToDuration(900)).toStrictEqual(new Duration(0, 0, 0, 900))
        expect(DurationMapper.millisecondsToDuration(1023)).toStrictEqual(new Duration(0, 0, 1, 23))
        expect(DurationMapper.millisecondsToDuration(62086)).toStrictEqual(new Duration(0, 1, 2, 86))
        expect(DurationMapper.millisecondsToDuration(3721011)).toStrictEqual(new Duration(1, 2, 1, 11))
    })
})