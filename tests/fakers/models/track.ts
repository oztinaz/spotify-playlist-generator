import { TrackFactory } from '@/factories/track'
import { Track } from '@/models/track'
import { faker } from '@faker-js/faker'
import { generateFakeAlbum } from '@/../tests/fakers/models/album'
import { generateFakeArtist } from '@/../tests/fakers/models/artist'
import { generateFakeDuration } from '@/../tests/fakers/models/duration'

export function generateFakeTrack(): Track {
    return TrackFactory.create(
        faker.database.mongodbObjectId(),
        generateFakeAlbum(),
        [generateFakeArtist()],
        generateFakeDuration(),
        faker.datatype.boolean(),
        [faker.random.word()],
        faker.random.word(),
        faker.random.word()
    )
}