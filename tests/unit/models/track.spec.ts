import { Image } from '@/models/image'
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'
import { Duration } from '@/models/duration'

const fakeId: string = 'fakeId'
const fakeAlbum: Album = new Album('', [], [], [], '', 0, '')
const fakeArtists: Array<Artist> = [
    new Artist('', [], [], '', ''),
    new Artist('', [], [], '', '')
]
const fakeDuration: Duration = new Duration(1, 1, 1 ,1)
const fakeExplicit: boolean = true
const fakeMarkets: Array<string> = ['a', 'b']
const fakeName: string = 'fakeName'
const fakeUri: string = 'fakeUri'

describe('@/models/track.ts', () => {
    it('checks getters', () => {
        const track: Track = new Track(
            fakeId,
            fakeAlbum,
            fakeArtists,
            fakeDuration,
            fakeExplicit,
            fakeMarkets,
            fakeName,
            fakeUri
        )

        expect(track.getId()).toBe(fakeId)
        expect(track.getAlbum()).toStrictEqual(fakeAlbum)
        expect(track.getArtists()).toStrictEqual(fakeArtists)
        expect(track.getDuration()).toBe(fakeDuration)
        expect(track.isExplicit()).toBe(fakeExplicit)
        expect(track.getMarkets()).toBe(fakeMarkets)
        expect(track.getName()).toBe(fakeName)
        expect(track.getUri()).toBe(fakeUri)
    })

    it('checks setters', () => {
        const track: Track = new Track(
            'a',
            fakeAlbum,
            fakeArtists,
            fakeDuration,
            false,
            [],
            '',
            ''
        )

        track.setId(fakeId)
        expect(track.getId()).toBe(fakeId)

        track.setAlbum(fakeAlbum)
        expect(track.getAlbum()).toStrictEqual(fakeAlbum)

        track.setArtists(fakeArtists)
        expect(track.getArtists()).toStrictEqual(fakeArtists)

        track.setDuration(fakeDuration)
        expect(track.getDuration()).toBe(fakeDuration)

        track.setExplicit(fakeExplicit)
        expect(track.isExplicit()).toBe(fakeExplicit)

        track.setMarkets(fakeMarkets)
        expect(track.getMarkets()).toBe(fakeMarkets)

        track.setName(fakeName)
        expect(track.getName()).toBe(fakeName)

        track.setUri(fakeUri)
        expect(track.getUri()).toBe(fakeUri)
    })
})