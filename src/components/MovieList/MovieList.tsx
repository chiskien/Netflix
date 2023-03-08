import {Movie, Response} from "../../models/Movie";
import React, {useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";

type MovieProps = {
    apiUrl: string;
    title: string;
    page: number | null;
}
export const MovieList: React.FC<MovieProps> = ({apiUrl, title, page = 1}) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMovies = async (): Promise<Response<Movie[]>> => {
        const response = await fetch(`${apiUrl}&page=${page}`);
        return response.json();
    }
    useEffect(() => {
        
    }, [])
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