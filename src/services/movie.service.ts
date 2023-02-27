import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import {Movie} from "../models/Movie";

export const tmdbApi: string = "https://api.themoviedb.org/3";

const key: string = "2a14a0070cbbea8bb85612746901228a";

const axiosClient = axios.create({
    baseURL: tmdbApi
})

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.baseURL = tmdbApi;
    config.method = "GET";
    config.params = config.params || {};
    config.params["api_key"] = key;
    return config;
})

export const getPopularMovies = async (page = 1) => {
    const response = await axiosClient.get<Movie[]>("/todos")
    return response.data;
}