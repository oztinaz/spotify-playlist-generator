// Factories
import { ImageFactory } from '@/factories/image'

// Models
import { Image } from '@/models/image'

// Spotify Types
import { SpotifyImage } from '@/types/spotify-image'

export class ImageMapper {

    public static spotifyImagesToImages(spotifyImages: Array<SpotifyImage>): Array<Image> {
        return spotifyImages.map((image: SpotifyImage) => {
            return ImageMapper.spotifyImageToImage(image)
        })
    }

    public static spotifyImageToImage(spotifyImage: SpotifyImage): Image {
        return ImageFactory.create(
            spotifyImage.url,
            spotifyImage.height,
            spotifyImage.width
        )
    }
}