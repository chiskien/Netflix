import React from "react";
import {MovieList} from "../Movie/MovieList";
import {Button, ButtonGroup, Container, Flex, Heading} from "@chakra-ui/react";
import {
    hboOriginalsUrl,
    netflixOriginalsUrl,
    popularMoviesUrl,
    topRatedMoviesUrl
} from "../../services/endpoints.service";
import {Disclaimer} from "./Disclaimer";

export const HomePage = () => {

    return (
        <Container maxW={"container.xl"}>
            <Disclaimer/>
            <Flex marginBottom={"20px"} gap={5} marginTop={"20px"} alignItems={"center"}>
                <Heading size={"lg"}
                         textColor={"#F5F5F4"}>
                    Recommend
                </Heading>
                <ButtonGroup gap={1}>
                    <Button colorScheme={"teal"} variant={"solid"}>Movies</Button>
                    <Button colorScheme={"teal"} variant={"solid"}>TV Series</Button>
                    <Button colorScheme={"teal"} variant={"solid"}>Trending</Button>
                </ButtonGroup>
            </Flex>
            <MovieList title={"Most popular movies"} apiUrl={`${popularMoviesUrl}`} page={1} isMovie={true}/>
            <MovieList title={"HBO Originals"} apiUrl={`${hboOriginalsUrl}`} page={1} isMovie={false}/>
            <MovieList title={"Netflix Originals"} page={1} apiUrl={`${netflixOriginalsUrl}`} isMovie={false}/>
            <MovieList title={"Most Rated Movies"} page={1} apiUrl={`${topRatedMoviesUrl}`} isMovie={true}/>


        </Container>
    )
}