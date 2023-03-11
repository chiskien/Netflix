import {Movie, Response, TV} from "../../models/Movie";
import React, {useCallback, useEffect, useState} from "react";
import {MovieCard} from "./MovieCard";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import {SeriesCard} from "../Series/SeriesCard";

type MovieProps = {
    apiUrl: string;
    title: string;
    page: number | null;
    isMovie: boolean;
}

export const MovieList: React.FC<MovieProps> = ({apiUrl, title, isMovie = true, page = 1}) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [series, setSeries] = useState<TV[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<any>(null);


    const getMovies = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        setErrors(null);
        try {
            const response = await fetch(`${apiUrl}&page=${page}`);
            if (!response.ok) {
                throw new Error(`${response.statusText}`)
            }
            const data: Response<Movie[]> = await response.json();
            setMovies(data.results);
        } catch (error: any) {
            setErrors(error.message)
        }
        setIsLoading(false);
    }, []);


    const getSeries = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        setErrors(null);
        try {
            const response = await fetch(`${apiUrl}&page=${page}`);
            if (!response.ok) {
                throw new Error(`${response.statusText}`)
            }
            const data: Response<TV[]> = await response.json();
            setSeries(data.results);
        } catch (error: any) {
            setErrors(error.message)
        }
        setIsLoading(false);
    }, []);

    if (isMovie) {
        useEffect(() => {
            getMovies().then(r => console.log(r));
        }, [getMovies]);
    } else {
        useEffect(() => {
            getSeries().then(r => console.log(r));
        }, [getSeries]);
    }
    let content: JSX.Element;

    return (
        <Box marginTop={"20px"}>
            <Heading as={"h2"} size={"xl"} marginBottom={"20px"} textColor={"#F5F5F4"}>
                {title}
            </Heading>
            <SimpleGrid columns={8} spacing={3} className={"movie__list"}>
                {
                    isMovie ? movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} isLoading={isLoading}/>))
                        : series.map((tv) => (
                            <SeriesCard key={tv.id} tv={tv} isLoading={isLoading}/>
                        ))
                }
            </SimpleGrid>
        </Box>
    );
}