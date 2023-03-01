import React, {useEffect, useState} from "react";
import {Movie} from "../../models/Movie";
import {getPopularMovies, getTopRatedMovies, getUpComingMovies} from "../../services/movie.service";
import {MovieList} from "../MovieList/MovieList";
import {Box, Container, Heading} from "@chakra-ui/react";
import {Banner} from "../Banner/Banner";

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
        <Container maxW={"container.lg"}>
            <Box>
            </Box>
            <Box>
                <Heading as={"h2"} size={"2xl"} marginBottom={"20px"} textColor={"#F5F5F4"}>
                    Most popular Movies</Heading>
                <MovieList movies={popularMovies}/>
            </Box>
            <Box>
                <Heading as={"h2"} size={"2xl"} margin={"20px"} textColor={"#F5F5F4"}>
                    Most Rated Movies</Heading>
                <MovieList movies={topRatedMovies}/>
            </Box>

        </Container>
    )
}