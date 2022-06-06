import { SpotifyImage } from '@/types/spotify-image'
import { faker } from '@faker-js/faker'

export function generateFakeSpotifyImage(): SpotifyImage {
    const size: number = faker.datatype.number({ min: 1, max: 50})
    return {
        url: faker.internet.url(),
        height: size,
        width: size
    }
}