import { PlaylistFactory } from '@/factories/playlist'
import { Playlist } from '@/models/playlist'
import { faker } from '@faker-js/faker'
import { generateFakeImage } from '@/../tests/fakers/models/image'
import { generateFakeTrack } from '@/../tests/fakers/models/track'

export function generateFakePlaylist(): Playlist {
    return PlaylistFactory.create(
        faker.database.mongodbObjectId(),
        faker.datatype.boolean(),
        faker.lorem.sentence(),
        [generateFakeImage()],
        faker.random.word(),
        faker.datatype.boolean(),
        faker.datatype.number({ min: 0, max: 40 }),
        [generateFakeTrack()]
    )
}