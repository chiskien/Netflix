import React, {useEffect, useState} from "react";
import {Box, Button, ButtonGroup, Container, Flex, Heading} from "@chakra-ui/react";
import {Disclaimer} from "./Disclaimer";
import "./HomePage.scss";
import {MoviesHomePage} from "../Movie/MoviesHomePage";
import {SeriesHomePage} from "../Series/SeriesHomePage";

export const HomePage = () => {
    const [isMovie, setIsMovie] = useState<boolean>(true);
    const [contents, setContents] = useState<JSX.Element>(<div></div>);

    const switchToMovies = () => {
        setIsMovie(true);
    }
    const switchToSeries = () => {
        setIsMovie(false);
    }
    useEffect(() => {
        if (isMovie) {
            setContents(<MoviesHomePage isMovie={isMovie}/>);
        } else {
            setContents(<SeriesHomePage isMovie={!isMovie}/>);
        }
    }, [isMovie]);


    return (
        <Container minW={"container.xl"}>
            <Disclaimer/>
            <Flex marginBottom={"20px"} gap={5} marginTop={"20px"} alignItems={"center"}>
                <Heading size={"lg"}
                         textColor={"teal.50"}>
                    Recommend
                </Heading>
                <ButtonGroup gap={1}>
                    <Button colorScheme={"teal"} variant={"solid"}
                            isActive={isMovie}
                            onClick={switchToMovies}>
                        Movies
                    </Button>
                    <Button colorScheme={"teal"} variant={"solid"}
                            isActive={!isMovie}
                            onClick={switchToSeries}>
                        TV Series
                    </Button>
                </ButtonGroup>
            </Flex>
            <Box>
                {contents}
            </Box>
        </Container>
    )
}
