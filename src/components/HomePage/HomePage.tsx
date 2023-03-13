import React, {useState} from "react";
import {MovieList} from "../Movie/MovieList";
import {Box, Button, ButtonGroup, Container, Flex, Heading} from "@chakra-ui/react";
import {
    hboOriginalsUrl,
    netflixOriginalsUrl,
    popularMoviesUrl,
    topRatedMoviesUrl
} from "../../services/endpoints.service";
import {Disclaimer} from "./Disclaimer";
import "./HomePage.scss";

export const HomePage = () => {
    const [isSeries, setIsSeries] = useState<boolean>(false);
    const changeIsMovie = () => {
        setIsSeries(false);
    }
    const changeIsSeries = () => {
        setIsSeries(true);
    }

    return (
        <Container minW={"container.xl"}>
            <Disclaimer/>
            <Flex marginBottom={"20px"} gap={5} marginTop={"20px"} alignItems={"center"}>
                <Heading size={"lg"}
                         textColor={"#F5F5F4"}>
                    Recommend
                </Heading>
                <ButtonGroup gap={1}>
                    <Button colorScheme={"teal"} variant={"solid"}
                            isActive={!isSeries}
                            onClick={changeIsMovie}>
                        Movies
                    </Button>
                    <Button colorScheme={"teal"} variant={"solid"}
                            isActive={isSeries}
                            onClick={changeIsSeries}>
                        TV Series
                    </Button>

                    <Button colorScheme={"teal"} variant={"solid"}>My List</Button>
                </ButtonGroup>
            </Flex>
            {
                isSeries ?
                    (<Box>
                        {/*<BestPicksForYouSeries title={"Best Picks For You"}/>*/}
                        <MovieList title={"HBO Originals"} apiUrl={`${hboOriginalsUrl}`} page={1} isMovie={false}/>
                        <MovieList title={"Netflix Originals"} page={1} apiUrl={`${netflixOriginalsUrl}`}
                                   isMovie={false}/>
                    </Box>)
                    :
                    (<Box>
                        <MovieList title={"Most popular movies"} apiUrl={`${popularMoviesUrl}`} page={1}
                                   isMovie={true}/>
                        <MovieList title={"Most Rated Movies"} page={1} apiUrl={`${topRatedMoviesUrl}`} isMovie={true}/>
                    </Box>)
            }


        </Container>
    )
}