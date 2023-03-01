import {Movie, Response, TV} from "../models/Movie";
import {netflixOriginals} from "./endpoints.service";

export async function getNetflixOriginal(page = 1): Promise<Response<TV[]>> {
    const response = await fetch(`${netflixOriginals}/&sort_by=popularity.desc&with_networks=213&page=${page}`);
    return await response.json();
}

export function getRandomNumber(length: number): number {
    return Math.floor(Math.random() * length - 1);
}