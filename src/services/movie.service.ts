import {Movie, Response} from "../models/Movie";
import {popularMovies, topRatedMovies, upComingMovies} from "./endpoints.service";

export async function getPopularMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${popularMovies}&page=${page}`);
    return await response.json();
}

export async function getTopRatedMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${topRatedMovies}&page=${page}`);
    return await response.json();
}

export async function getUpComingMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${upComingMovies}&page=${page}`);
    return await response.json();
}

