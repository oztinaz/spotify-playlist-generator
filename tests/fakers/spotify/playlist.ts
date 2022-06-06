import { SpotifyPlaylist } from '@/types/spotify-playlist'
import { faker } from '@faker-js/faker'
import { generateFakeSpotifyImage } from '@/../tests/fakers/spotify/image'

export function generateFakeSpotifyPlaylist(): SpotifyPlaylist {
    return {
        id: faker.database.mongodbObjectId(),
        collaborative: faker.datatype.boolean(),
        description: faker.lorem.sentence(),
        name: faker.random.word(),
        public: faker.datatype.boolean(),
        images: [generateFakeSpotifyImage()],
        tracks: {
            total: faker.datatype.number({ min: 0, max: 40 })
        }
    }
}