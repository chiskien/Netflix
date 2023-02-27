import {Movie} from "../models/Movie";

export const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";

export async function getAllMovies() {
    const response = await fetch(`${tmdbApi}/movie/latest?api_key=${key}`);

    return null;
}