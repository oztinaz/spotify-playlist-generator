// Models
import { Image } from '@/models/image'

export class ImageFactory {
    
    public static create(
        url: string,
        height: number,
        width: number
    ): Image {
        const image: Image = new Image()

        image.setUrl(url)
        image.setHeight(height)
        image.setWidth(width)

        return image
    }
}