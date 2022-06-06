import { faker } from '@faker-js/faker'

import { Image } from '@/models/image'
import { ImageFactory } from '@/factories/image'

export function generateFakeImage(): Image {
    const size: number = faker.datatype.number({ min: 1, max: 50})
    return ImageFactory.create(
        faker.internet.url(),
        size,
        size
    )
}