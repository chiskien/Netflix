import {tmdbApi, key} from "./endpoints.service";
import {Network} from "../models/Movie";


export const getAllNetworks = async (id: number): Promise<Network | null> => {
    const response = await fetch(`${tmdbApi}/network/${id}?api_key=${key}`);
    if (response.status === 200) {
        return response.json();
    } else {
        return null;
    }

}