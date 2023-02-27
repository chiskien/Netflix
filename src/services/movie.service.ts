import {Genre, Movie, Response, ResponseGenre} from "../models/Movie";

export const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";


export async function getPopularMovies(): Promise<Response<Movie[]>> {
    const response = await fetch(`${tmdbApi}/movie/popular?api_key=${key}`);
    return await response.json();
}

export async function getTopRatedMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${tmdbApi}/movie/top_rated?api_key=${key}&page=${page}`);
    return await response.json();
}

export async function getUpComingMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${tmdbApi}/movie/upcoming?api_key=${key}&page=${page}`);
    return await response.json();
}


export async function getGenres(): Promise<ResponseGenre> {
    const response = await fetch(`${tmdbApi}/genre/movie/list?api_key=${key}`);
    return await response.json();
}