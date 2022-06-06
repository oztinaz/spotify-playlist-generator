import { SpotifyToken } from '@/types/spotify-token'
import { faker } from '@faker-js/faker'

export function generateFakeSpotifyTokenWithRefreshToken(): SpotifyToken {
    return {
        access_token: faker.database.mongodbObjectId(),
        expires_in: faker.datatype.number({ min: 1, max: 3600}),
        refresh_token: faker.database.mongodbObjectId(),
        scope: faker.random.word(),
        token_type: 'Bearer'
    }
}

export function generateFakeSpotifyTokenWithoutRefreshToken(): SpotifyToken {
    return {
        access_token: faker.database.mongodbObjectId(),
        expires_in: faker.datatype.number({ min: 1, max: 3600}),
        scope: faker.random.word(),
        token_type: 'Bearer'
    }
}