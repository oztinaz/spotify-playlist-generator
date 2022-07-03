import { SpotifyAlbum } from '@/types/spotify-album'
import { faker } from '@faker-js/faker'
import { generateFakeSpotifyArtist } from '@/../tests/fakers/spotify/artist'
import { generateFakeSpotifyImage } from '@/../tests/fakers/spotify/image'

export function generateFakeSpotifyAlbum(): SpotifyAlbum {
    return {
        id: faker.database.mongodbObjectId(),
        artists: [generateFakeSpotifyArtist()],
        images: [generateFakeSpotifyImage()],
        available_markets: [faker.random.word()],
        name: faker.random.word(),
        release_date: faker.datatype.datetime().toISOString(),
        total_tracks: faker.datatype.number({ min: 0, max: 40 }),
        album_type: faker.random.word()
    }
}