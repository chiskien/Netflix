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
    known_for?: DiscoverMovie[];
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

export interface DiscoverMovie {
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
    genre_ids: GenreId;
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

export type Response<T> = {
    page: number;
    results: T;
    total_results: number;
    total_page: number;
}

export interface DiscoverTV extends DiscoverMovie {
    name: string,
    vote_average: number,
    first_air_date: string
    first_air_date_toDate: Date
}

export interface Season {
}

export interface TV {
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    status: string;
    original_language: string;
    original_name: string;
    popularity: number;
    type: string;
    tagline: string;
    vote_average: number;
    backdrop_path: string | null;
    episode_run_time: number[];
    first_air_date: string;
    first_air_date_toDate: Date;
    genres: Genre[];
    seasons: Season[];

}

export interface Network {
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string;
    name: string;
}