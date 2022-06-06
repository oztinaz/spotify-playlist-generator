import { SpotifyTrack } from '@/types/spotify-track'
import { faker } from '@faker-js/faker'
import { generateFakeSpotifyAlbum } from '@/../tests/fakers/spotify/album'
import { generateFakeSpotifyArtist } from '@/../tests/fakers/spotify/artist'

export function generateFakeSpotifyTrack(): SpotifyTrack {
    return {
        id: faker.database.mongodbObjectId(),
        album: generateFakeSpotifyAlbum(),
        artists: [generateFakeSpotifyArtist()],
        duration_ms: faker.datatype.number({ min: 1000, max: 1000000}),
        explicit: faker.datatype.boolean(),
        available_markets: [faker.random.word()],
        name: faker.random.word(),
        uri: faker.random.word()
    }
}