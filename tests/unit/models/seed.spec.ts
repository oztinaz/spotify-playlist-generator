import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Duration } from '@/models/duration'
import { Seed } from '@/models/seed'
import { Track } from '@/models/track'

const fakeArtist = new Artist('', [], [], '', '')
const fakeTrack = new Track('', new Album('', [], [], [], '', 0, ''), [], new Duration(0, 0, 0, 0), false, [], '', '')

describe('@/models/seed.ts', () => {
    it('checks adders and getters', () => {
        const seed = new Seed()

        seed.addArtist(fakeArtist)
        expect(seed.getArtists()).toStrictEqual([fakeArtist])

        seed.addGenre('a')
        expect(seed.getGenres()).toStrictEqual(['a'])

        seed.addTrack(fakeTrack)
        expect(seed.getTracks()).toStrictEqual([fakeTrack])
    })

    it('checks removers', () => {
        const seed = new Seed()

        seed.addArtist(fakeArtist)
        expect(seed.getArtists()).toHaveLength(1)
        seed.removeArtist(fakeArtist)
        expect(seed.getArtists()).toHaveLength(0)

        seed.addGenre('a')
        expect(seed.getGenres()).toHaveLength(1)
        seed.removeGenre('a')
        expect(seed.getGenres()).toHaveLength(0)

        seed.addTrack(fakeTrack)
        expect(seed.getTracks()).toHaveLength(1)
        seed.removeTrack(fakeTrack)
        expect(seed.getTracks()).toHaveLength(0)
    })

    it('checks isIncludeds', () => {
        const seed = new Seed()

        expect(seed.isArtistIncluded(fakeArtist)).toBe(false)
        seed.addArtist(fakeArtist)
        expect(seed.isArtistIncluded(fakeArtist)).toBe(true)

        expect(seed.isGenreIncluded('a')).toBe(false)
        seed.addGenre('a')
        expect(seed.isGenreIncluded('a')).toBe(true)

        expect(seed.isTrackIncluded(fakeTrack)).toBe(false)
        seed.addTrack(fakeTrack)
        expect(seed.isTrackIncluded(fakeTrack)).toBe(true)
    })

    it('checks isValid', () => {
        const seed = new Seed()

        expect(seed.isValid()).toBe(false)

        seed.addArtist(fakeArtist)
        expect(seed.isValid()).toBe(true)

        seed.addArtist(fakeArtist)
        seed.addGenre('a')
        seed.addTrack(fakeTrack)
        seed.addTrack(fakeTrack)
        expect(seed.isValid()).toBe(true)

        seed.addTrack(fakeTrack)
        expect(seed.isValid()).toBe(false)
    })
})