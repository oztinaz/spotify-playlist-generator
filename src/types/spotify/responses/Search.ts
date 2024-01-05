import type { Album } from "@/types/spotify/Album"
import type { Artist } from "@/types/spotify/Artist"
import type { Track } from "@/types/spotify/Track"

export type SpotifySearchResponse = {
  albums?: SpotifySearchItem<Album>,
  artists?: SpotifySearchItem<Artist>,
  tracks?: SpotifySearchItem<Track>
}

export type SpotifySearchItem<T> = {
  href: string,
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
  items: T[]
}