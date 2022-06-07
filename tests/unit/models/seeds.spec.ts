import { Artist } from '@/models/artist'
import { Seeds } from '@/models/seeds'
import { Track } from '@/models/track'

const fakeArtist = new Artist()
const fakeTrack = new Track()

describe('@/models/seed.ts', () => {
    it('checks adders and getters', () => {
        const seeds = new Seeds()

        seeds.addArtist(fakeArtist)
        expect(seeds.getArtists()).toStrictEqual([fakeArtist])

        seeds.addGenre('a')
        expect(seeds.getGenres()).toStrictEqual(['a'])

        seeds.addTrack(fakeTrack)
        expect(seeds.getTracks()).toStrictEqual([fakeTrack])
    })

    it('checks removers', () => {
        const seeds = new Seeds()

        seeds.addArtist(fakeArtist)
        expect(seeds.getArtists()).toHaveLength(1)
        seeds.removeArtist(fakeArtist)
        expect(seeds.getArtists()).toHaveLength(0)

        seeds.addGenre('a')
        expect(seeds.getGenres()).toHaveLength(1)
        seeds.removeGenre('a')
        expect(seeds.getGenres()).toHaveLength(0)

        seeds.addTrack(fakeTrack)
        expect(seeds.getTracks()).toHaveLength(1)
        seeds.removeTrack(fakeTrack)
        expect(seeds.getTracks()).toHaveLength(0)
    })

    it('checks isIncludeds', () => {
        const seed = new Seeds()

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
        const seeds = new Seeds()

        expect(seeds.isValid()).toBe(false)

        seeds.addArtist(fakeArtist)
        expect(seeds.isValid()).toBe(true)

        seeds.addArtist(fakeArtist)
        seeds.addGenre('a')
        seeds.addTrack(fakeTrack)
        seeds.addTrack(fakeTrack)
        expect(seeds.isValid()).toBe(true)

        seeds.addTrack(fakeTrack)
        expect(seeds.isValid()).toBe(false)
    })
})