import {Movie, Response, TV} from "../models/Movie";
import {popularMoviesUrl, popularSeriesUrl, topRatedMoviesUrl, upComingMoviesUrl} from "./endpoints.service";

export async function getPopularMovies(page = 1): Promise<Response<Movie[]>> {
    const response = await fetch(`${popularMoviesUrl}&page=${page}`);
    return await response.json();
}

export async function getPopularSeries(page = 1): Promise<Response<TV[]>> {
    const response = await fetch(`${popularSeriesUrl}&page=${page}`);
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

