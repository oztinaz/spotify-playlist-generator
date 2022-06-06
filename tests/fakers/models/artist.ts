import { faker } from '@faker-js/faker'

import { Artist } from '@/models/artist'
import { ArtistFactory } from '@/factories/artist'

import { generateFakeImage } from '@/../tests/fakers/models/image'

export function generateFakeArtist(): Artist {
    return ArtistFactory.create(
        faker.database.mongodbObjectId(),
        [faker.random.word()],
        [generateFakeImage()],
        faker.random.word(),
        faker.random.word()
    )
}