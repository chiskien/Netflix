import {TV} from "../models/Movie";

export function getRandomNumber(length: number): number {
    return Math.floor(Math.random() * length);
}

export function truncate(str: string, width: number) {
    return str?.length > width ? str.substring(0, width - 1) + "..." : str;
}

export function blockingWjbuShitSeries(series: TV[]): TV[] {
    return series.filter((tv) => {
        return tv.original_language !== "ja"
    })
}

export async function transformSeries(series: TV): Promise<TV> {
    // series.genres = await getGenresFrom(series);
    series.first_air_date_toDate = new Date(series.first_air_date);
    return series;
}