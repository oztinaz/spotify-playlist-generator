// Fakers
import { generateFakeTrack } from '@/../tests/fakers/models/track'

// Models
import { Track } from '@/models/track'

describe('@/models/track.ts', () => {
    it('checks getters and setters', () => {
        const fakeTrack: Track = generateFakeTrack()
        const track: Track = new Track()

        track.setId(fakeTrack.getId())
        expect(track.getId()).toBe(fakeTrack.getId())

        track.setAlbum(fakeTrack.getAlbum())
        expect(track.getAlbum()).toStrictEqual(fakeTrack.getAlbum())

        track.setArtists(fakeTrack.getArtists())
        expect(track.getArtists()).toStrictEqual(fakeTrack.getArtists())

        track.setDuration(fakeTrack.getDuration())
        expect(track.getDuration()).toBe(fakeTrack.getDuration())

        track.setExplicit(fakeTrack.isExplicit())
        expect(track.isExplicit()).toBe(fakeTrack.isExplicit())

        track.setMarkets(fakeTrack.getMarkets())
        expect(track.getMarkets()).toBe(fakeTrack.getMarkets())

        track.setName(fakeTrack.getName())
        expect(track.getName()).toBe(fakeTrack.getName())

        track.setUri(fakeTrack.getUri())
        expect(track.getUri()).toBe(fakeTrack.getUri())
    })
})