export type Image = {
    file_path: string;
    aspect_ratio: number;
    height: number;
    width: number;
}

export type Cast = {
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
export type Movie = {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;

}
export type Response<T> = {
    page: number;
    results: T;
    total_results: number;
    total_page: number;
}

export type Genre = {
    id: number;
    name: string;
}

export type ResponseGenre = {
    genres: Genre[];
}

export type TV = {
    id: number;
    backdrop_path: string | null;
    poster_path: string | null;
    name: string;
    original_name: string;
    overview: string;
}