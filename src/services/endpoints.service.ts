export const tmdbApi: string = "https://api.themoviedb.org/3";

export const key: string = "2a14a0070cbbea8bb85612746901228a";

export const image_base_url: string = "https://image.tmdb.org/t/p/original"

export const popularMoviesUrl = `${tmdbApi}/movie/popular?api_key=${key}`;//return a array of movies
export const upComingMoviesUrl = `${tmdbApi}/movie/upcoming?api_key=${key}`; //return a array of movies
export const topRatedMoviesUrl = `${tmdbApi}/movie/top_rated?api_key=${key}`;
export const popularSeriesUrl = `${tmdbApi}/tv/popular?api_key=${key}`;
export const topRatedSeriesUrl = `${tmdbApi}/tv/top_rated?api_key=${key}`;
export const netflixOriginalsUrl = `${tmdbApi}/discover/tv?api_key=${key}&with_networks=213&sort_by=popularity.desc`;
export const hboOriginalsUrl = `${tmdbApi}/discover/tv?api_key=${key}&with_networks=49&sort_by=popularity.desc`;


