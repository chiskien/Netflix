export interface Image {
    file_path: string;
    aspect_ratio: number;
    height: number;
    width: number;
}

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for?: Movie[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    other: number;
}

export interface Movie {
    id: number;
    adult: boolean;
    title: string;
    release_date: string;
    poster_path: string | null;
    backdrop_path: string | null;
    original_title: string;
    original_language: string;
    popularity: number;
    overview: string;
    vote_count: number;
    genre_ids: GenreId[];
    genres: Genre[];
    revenue: number;
    tagline: string | null;

}

export type GenreId = Array<number>




export interface Genre {
    id: number;
    name: string;
}

export interface ResponseGenre {
    genres: Genre[];
}

export interface TV extends Movie {
    name: string;
}

export interface Network {
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string;
    name: string;
}