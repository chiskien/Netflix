import {useEffect, useState} from "react";
import {Movie} from "../../models/Movie";
import {getPopularMovies, getTopRatedMovies, getUpComingMovies} from "../../services/movie.service";
import {MovieList} from "../MovieList/MovieList";

export const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadPopularMovies();
        loadTopRatedMovie();
        loadUpComingMovie();
    }, [])
    const loadPopularMovies = async () => {
        const response = await getPopularMovies();
        const popularMovies: Movie[] = response.results;
        setPopularMovies(popularMovies);
    }
    const loadTopRatedMovie = async () => {
        const response = await getTopRatedMovies();
        const topRatedMovies: Movie[] = response.results;
        setTopRatedMovies(topRatedMovies);
    }
    const loadUpComingMovie = async () => {
        const response = await getUpComingMovies();
        const upComingMovies: Movie[] = response.results;
        setUpComingMovies(upComingMovies);
    }
    return (
        <div>
            <h1>Most popular Movies</h1>
            <MovieList movies={popularMovies}/>
            <hr/>
            <h1>Most Rated Movies</h1>
            <MovieList movies={topRatedMovies}/>
            <hr/>
            <h1>UpComing Movies</h1>
            <MovieList movies={upComingMovies}/>
        </div>
    )
}