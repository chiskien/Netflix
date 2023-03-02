import {Movie, TV} from "../../models/Movie";
import React from "react";
import {MovieCard} from "./MovieCard";
import {Box, Heading, Wrap} from "@chakra-ui/react";

type MovieProps<T> = {
    movies: T[],
    title: string,
    isMovie: boolean
}
export const MovieList: React.FC<MovieProps<Movie>> = ({movies, title, isMovie}) => {
    return (
        <Box>
            <Heading as={"h2"} size={"2xl"} margin={"20px"} textColor={"#F5F5F4"}>
                {title}
            </Heading>
            <Wrap>
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>))
                }
            </Wrap>
        </Box>
    );
}