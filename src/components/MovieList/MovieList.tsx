import {Movie} from "../../models/Movie";
import React from "react";
import {MovieCard} from "./MovieCard";
import {Box, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import "./MovieList.scss";

type MovieProps<T> = {
    movies: T[],
    title: string,
    isMovie: boolean
}
export const MovieList: React.FC<MovieProps<Movie>> = ({movies, title, isMovie}) => {

    return (
        <Box marginTop={"20px"}>
            <Heading as={"h2"} size={"xl"} marginBottom={"20px"} textColor={"#F5F5F4"}>
                {title}
            </Heading>
            <SimpleGrid columns={8} spacing={3} className={"movie__list"}>
                {
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>))
                }
            </SimpleGrid>
        </Box>
    );
}