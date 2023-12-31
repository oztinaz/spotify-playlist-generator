import type { Genre } from "@/types/spotify/Genre"
import type { Image } from "@/types/spotify/Image"

export type Artist = {
  "external_urls": {
    "spotify": string
  },
  "followers": {
    "href": string,
    "total": number
  },
  "genres": Genre[],
  "href": string,
  "id": string,
  "images": Image[],
  "name": string,
  "popularity": number,
  "type": 'artist',
  "uri": string
}