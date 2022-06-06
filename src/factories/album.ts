// Models
import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

export class AlbumFactory {

    public static create(
        id: string,
        artists: Array<Artist>,
        images: Array<Image>,
        markets: Array<string>,
        name: string,
        total: number,
        type: string
    ): Album {
        const album: Album = new Album()

        album.setId(id)
        album.setArtists(artists)
        album.setImages(images)
        album.setMarkets(markets)
        album.setName(name)
        album.setTotal(total)
        album.setType(type)

        return album
    }
}