import { ImageMapper } from '@/mappers/image'
import { Image } from '@/models/image'
import { SpotifyImage } from '@/types/spotify-image'

const mockImage: SpotifyImage = {
    url: 'fakeUrl',
    height: 50,
    width: 50
}

describe('@/mappers/image.ts', () => {
    it('checks spotifyImageToImage method', () => {
        const image: Image = ImageMapper.spotifyImageToImage(mockImage)

        expect(image.getUrl()).toBe(mockImage.url)
        expect(image.getHeight()).toBe(mockImage.height)
        expect(image.getWidth()).toBe(mockImage.width)
    })
})