import type { Artist } from "@/types/spotify/Artist"
import type { Genre } from "@/types/spotify/Genre"
import type { Image } from "@/types/spotify/Image"
import type { Track } from "@/types/spotify/Track"

export type Album = {
  "album_type": string,
  "total_tracks": number,
  "available_markets": string[],
  "external_urls": {
    "spotify": string
  },
  "href": string,
  "id": string,
  "images": Image[],
  "name": string,
  "release_date": string,
  "release_date_precision": string,
  "restrictions": {
    "reason": string
  },
  "type": 'album',
  "uri": string,
  "artists": Artist[],
  "tracks": {
    "href": string,
    "limit": number,
    "next": string,
    "offset": number,
    "previous": string,
    "total": number,
    "items": Track[]
  },
  "copyrights": [
    {
      "text": string,
      "type": string
    }
  ],
  "external_ids": {
    "isrc": string,
    "ean": string,
    "upc": string
  },
  "genres": Genre[],
  "label": string,
  "popularity": number
}