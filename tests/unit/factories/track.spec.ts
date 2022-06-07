import { TrackFactory } from '@/factories/track'
import { Album } from '@/models/album'
import { Duration } from '@/models/duration'
import { Track } from '@/models/track'
import { generateFakeTrack } from '@/../tests/fakers/models/track'

describe('@/factories/track.ts', () => {
    it('checks create method', () => {
        const fakeTrack: Track = generateFakeTrack()
        const track: Track = TrackFactory.create(
            fakeTrack.getId() as string,
            fakeTrack.getAlbum() as Album,
            fakeTrack.getArtists(),
            fakeTrack.getDuration() as Duration,
            fakeTrack.isExplicit(),
            fakeTrack.getMarkets(),
            fakeTrack.getName() as string,
            fakeTrack.getUri() as string
        )

        expect(track.getId()).toBe(fakeTrack.getId())
        expect(track.getAlbum()).toStrictEqual(fakeTrack.getAlbum())
        expect(track.getArtists()).toStrictEqual(fakeTrack.getArtists())
        expect(track.getDuration()).toStrictEqual(fakeTrack.getDuration())
        expect(track.isExplicit()).toBe(fakeTrack.isExplicit())
        expect(track.getMarkets()).toStrictEqual(fakeTrack.getMarkets())
        expect(track.getName()).toBe(fakeTrack.getName())
        expect(track.getUri()).toBe(fakeTrack.getUri())
    })
})