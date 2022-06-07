// Fakers
import { generateFakeSpotifyImage } from '@/../tests/fakers/spotify/image'

// Mappers
import { ImageMapper } from '@/mappers/image'

// Models
import { Image } from '@/models/image'

// Spotify Types
import { SpotifyImage } from '@/types/spotify-image'

describe('@/mappers/image.ts', () => {
    it('checks spotifyImageToImage method', () => {
        const fakeSpotifyImage: SpotifyImage = generateFakeSpotifyImage()
        const image: Image = ImageMapper.spotifyImageToImage(fakeSpotifyImage)

        expect(image.getUrl()).toBe(fakeSpotifyImage.url)
        expect(image.getHeight()).toBe(fakeSpotifyImage.height)
        expect(image.getWidth()).toBe(fakeSpotifyImage.width)
    })

    it('checks spotifyImagesToImages method', () => {
        const fakeSpotifyImages: Array<SpotifyImage> = [generateFakeSpotifyImage()]
        const images: Array<Image> = ImageMapper.spotifyImagesToImages(fakeSpotifyImages)

        expect(images[0].getUrl()).toStrictEqual(fakeSpotifyImages[0].url)
    })
})