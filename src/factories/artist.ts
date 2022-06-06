// Models
import { Artist } from '@/models/artist'
import { Image } from '@/models/image'

export class ArtistFactory {

    public static create(
        id: string,
        genres: Array<string>,
        images: Array<Image>,
        name: string,
        uri: string
    ): Artist {
        const artist: Artist = new Artist()

        artist.setId(id)
        artist.setGenres(genres)
        artist.setImages(images)
        artist.setName(name)
        artist.setUri(uri)

        return artist
    }
}