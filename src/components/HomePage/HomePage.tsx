import React, {useEffect, useState} from "react";
import {Movie, TV} from "../../models/Movie";
import {getPopularMovies, getTopRatedMovies, getUpComingMovies} from "../../services/movie.service";
import {MovieList} from "../MovieList/MovieList";
import {Box, Container} from "@chakra-ui/react";
import {getNetflixOriginal} from "../../services/netflix-original.service";

export const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);
    const [netflixOriginals, setNetflixOriginals] = useState<TV[]>([]);

    useEffect(() => {
        loadPopularMovies();
        loadTopRatedMovie();
        loadUpComingMovie();
        loadNetflixOriginal();
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
    const loadNetflixOriginal = async () => {
        const response = await getNetflixOriginal();
        const netflixOriginals: TV[] = response.results;
        setNetflixOriginals(netflixOriginals);
    }
    return (
        <Container maxW={"container.lg"}>
            <Box>
                <MovieList movies={popularMovies} title={"Most popular movies"}
                           isMovie={false} />
            </Box>
            <Box>
                <MovieList movies={topRatedMovies}  title={"Most Rated Movies"}
                           isMovie={false}/>
            </Box>
            <Box>
                <MovieList isMovie={false} movies={upComingMovies}  title={"Up-coming Movies"}/>
            </Box>

        </Container>
    )
}