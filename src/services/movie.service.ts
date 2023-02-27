import {Genre} from "../models/Movie";

export const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";

export type Response<T> = {
    page: number;
    genres: T;
    total_results: number;
    total_pages: number;
}

export async function getLatestMovies() {
    const response = await fetch(`${tmdbApi}/movie/latest?api_key=${key}`);
    return await response.json();
}


export async function getGenres(): Promise<Response<Genre[]>> {
    const response = await fetch(`${tmdbApi}/genre/movie/list?api_key=${key}`);
    return response.json();

}