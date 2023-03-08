import {Movie, Response} from "../models/Movie";
import {popularMoviesUrl, topRatedMoviesUrl, upComingMoviesUrl} from "./endpoints.service";

export async function getPopularMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${popularMoviesUrl}&page=${page}`);
    return await response.json();
}

export async function getTopRatedMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${topRatedMoviesUrl}&page=${page}`);
    return await response.json();
}

export async function getUpComingMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${upComingMoviesUrl}&page=${page}`);
    return await response.json();
}

