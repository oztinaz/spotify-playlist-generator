import { AlbumFactory } from '@/factories/album'
import { Album } from '@/models/album'
import { faker } from '@faker-js/faker'
import { generateFakeArtist } from '@/../tests/fakers/models/artist'
import { generateFakeImage } from '@/../tests/fakers/models/image'

export function generateFakeAlbum(): Album {
    return AlbumFactory.create(
        faker.database.mongodbObjectId(),
        [generateFakeArtist()],
        [generateFakeImage()],
        [faker.random.word()],
        faker.random.word(),
        faker.datatype.number({ min: 0, max: 40 }),
        faker.random.word()
    )
}