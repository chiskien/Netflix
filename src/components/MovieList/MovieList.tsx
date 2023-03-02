import {Movie, TV} from "../../models/Movie";
import React from "react";
import {MovieCard} from "./MovieCard";
import {Box, Heading, SimpleGrid, Wrap} from "@chakra-ui/react";

type MovieProps<T> = {
    movies: T[],
    title: string,
    isMovie: boolean
}
export const MovieList: React.FC<MovieProps<Movie>> = ({movies, title, isMovie}) => {

    return (
        <Box >
            <Heading as={"h2"} size={"xl"} marginBottom={"20px"} textColor={"#F5F5F4"}>
                {title}
            </Heading>
            <SimpleGrid columns={5} spacing={"20px"}>
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>))
                }
            </SimpleGrid>
        </Box>
    );
}