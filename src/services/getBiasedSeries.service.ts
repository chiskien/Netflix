import {TV} from "../models/Movie";
import {key, tmdbApi} from "./endpoints.service";


export async function getMyBiasSeries(arraySeriesNumbers: number[]): Promise<TV[]> {
    let series: TV[] = [];
    for (const id of arraySeriesNumbers) {
        const tv = await getData(id);
        series.push(tv);

    }
    return series;
}

const getData = async (id: number): Promise<TV> => {
    const response = await fetch(`${tmdbApi}/tv/${id}?api_key=${key}`)
    return await response.json();
}