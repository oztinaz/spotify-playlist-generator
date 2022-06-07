import { Artist } from '@/models/artist'
import { Track } from '@/models/track'

export class Seeds {

    private artists: Array<Artist>

    private genres: Array<string>

    private tracks: Array<Track>

    constructor() {
        this.artists = []
        this.genres = []
        this.tracks = []
    }

    public addArtist(artist: Artist): void {
        this.artists.push(artist)
    }

    public isArtistIncluded(artist: Artist): boolean {
        return this.artists.filter((a: Artist) => artist.getId() === a.getId()).length > 0
    }

    public getArtists(): Array<Artist> {
        return this.artists
    }

    public removeArtist(artist: Artist): void {
        this.artists.splice(this.artists.findIndex((a: Artist) => a.getId() === artist.getId()), 1)
    }

    public addGenre(genre: string): void {
        this.genres.push(genre)
    }

    public isGenreIncluded(genre: string): boolean {
        return this.genres.filter((g: string) => g === genre).length >0
    }

    public getGenres(): Array<string> {
        return this.genres
    }

    public removeGenre(genre: string): void {
        this.genres.splice(this.genres.findIndex((g: string) => g === genre), 1)
    }

    public addTrack(track: Track): void {
        this.tracks.push(track)
    }

    public isTrackIncluded(track: Track): boolean {
        return this.tracks.filter((t: Track) => track.getId() === t.getId()).length > 0
    }

    public getTracks(): Array<Track> {
        return this.tracks
    }

    public removeTrack(track: Track): void {
        this.tracks.splice(this.tracks.findIndex((t: Track) => t.getId() === track.getId()), 1)
    }

    public isValid() {
        const total: number = this.getArtists().length + this.getGenres().length + this.getTracks().length
        return total > 0 && total < 6
    }
}