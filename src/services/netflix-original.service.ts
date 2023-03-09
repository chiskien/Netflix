import {Response, TV} from "../models/Movie";
import {hboOriginalsUrl, netflixOriginalsUrl} from "./endpoints.service";

export async function getNetflixOriginal(page = 1): Promise<Response<TV[]>> {
    const response = await fetch(`${netflixOriginalsUrl}&page=${page}`);
    return await response.json();
}


export async function getHboOriginals(page = 1): Promise<Response<TV[]>> {
    const response = await fetch(`${hboOriginalsUrl}&page=${page}`);
    return await response.json();
}