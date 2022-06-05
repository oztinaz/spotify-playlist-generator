import { Album } from '@/models/album'
import { Artist } from '@/models/artist'
import { Track } from '@/models/track'

export type SearchedItems = {
    albums?: Array<Album>,
    artists?: Array<Artist>,
    tracks?: Array<Track>
}

export type State = {
    searchedItems: SearchedItems | null
}