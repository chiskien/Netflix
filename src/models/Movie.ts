export type Movie = {
    id: number;
    poster_path?: string;
    title: string;
    imdb_id: number | null
    genres: Genre[]

}

export type Genre = {
    id: number;
    name: string;
}

