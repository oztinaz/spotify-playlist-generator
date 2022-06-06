import { SpotifyArtist } from '@/types/spotify-artist'
import { faker } from '@faker-js/faker'
import { generateFakeSpotifyImage } from '@/../tests/fakers/spotify/image'

export function generateFakeSpotifyArtist(): SpotifyArtist {
    return {
        id: faker.database.mongodbObjectId(),
        genres: [faker.random.word()],
        images: [generateFakeSpotifyImage()],
        name: faker.random.word(),
        uri: faker.random.word()
    }
}