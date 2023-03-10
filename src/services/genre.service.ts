import {Genre, ResponseGenre, TV} from "../models/Movie";
import {listGenresForTVUrl} from "./endpoints.service";

export async function getAllGenreForTV(): Promise<ResponseGenre> {
    const response = await fetch(listGenresForTVUrl);
    return await response.json();
}

export async function getGenresFrom(tv: TV): Promise<Genre[]> {
    const response = await getAllGenreForTV();
    const genres = response.genres;
    let genreId = tv.genre_ids;
    let genresOfTv: Genre[] = [];
    genreId.forEach((id) => {
        genres.forEach((genre) => {
            if (genre.id === id) {
                genresOfTv.push(genre);
            }
        })
    })
    return genresOfTv;
}