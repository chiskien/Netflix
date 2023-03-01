import {Movie} from "../../models/Movie";
import React from "react";
import {MovieCard} from "./MovieCard";
import {Box, SimpleGrid} from "@chakra-ui/react";

type MovieProps = {
    movies: Movie[]
}
export const MovieList: React.FC<MovieProps> = ({movies}) => {
    return (
        <SimpleGrid columns={4} spacing="10px">
            {
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>))
            }
        </SimpleGrid>
    );
}