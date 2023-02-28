const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";


export const popularMovies = `${tmdbApi}/movie/popular?api_key=${key}`;//return a array of movies
export const upComingMovies = `${tmdbApi}/movie/upcoming?api_key=${key}`; //return a array of movies
export const topRatedMovies = `${tmdbApi}/movie/top_rated?api_key=${key}`;
export const popularSeries = `${tmdbApi}/tv/popular?api_key=${key}`;
export const topRatedSeries = `${tmdbApi}/tv/top_rated?api_key=${key}`;
export const netflixOriginals = `${tmdbApi}/discover/tv?api_key=${key}&with_networks=213`;


