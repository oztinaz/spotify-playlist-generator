import { Image } from '@/models/image'
import { SpotifyImage } from '@/types/spotify-image'

export class ImageMapper {

    public static spotifyImageToImage(spotifyImage: SpotifyImage): Image {
        return new Image(
            spotifyImage.url,
            spotifyImage.height,
            spotifyImage.width
        )
    }
}