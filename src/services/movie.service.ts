export const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";

const fetchConfig: RequestInit = {
    mode: "no-cors",
    method: "get",
}

export async function getLatestMovies() {
    const response = await fetch(`${tmdbApi}/movie/latest?api_key=${key}`);
    return await response.json();
}

export async function getGenres() {
    const response = await fetch(`${tmdbApi}/genre/movie/list`, {
        method: "get",
        mode: "no-cors"
    });

}