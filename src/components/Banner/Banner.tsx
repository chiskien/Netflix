import React, {useEffect, useState} from "react";
import "./Banner.scss";
import {getHboOriginals, getNetflixOriginal} from "../../services/netflix-original.service";
import {Box, Button, ButtonGroup, Heading, Text} from "@chakra-ui/react";
import {getRandomNumber, truncate} from "../../helpers/helper";
import {TV} from "../../models/Movie";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

export const Banner: React.FC = () => {
    const [heroSectionSeries, setHeroSectionSeries] = useState<TV>({
        adult: false,
        backdrop_path: "",
        genre_ids: [],
        genres: [],
        id: 0,
        name: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        revenue: 0,
        tagline: "",
        title: "",
        vote_count: 0
    });
    const [heroSectionTV, setHeroSectionTVs] = useState<TV[]>([]);
    const loadOriginals = async () => {
        const response = await getHboOriginals();
        const netflixOriginalSeries: TV[] = response.results;
        const randomHeroSectionSeries: TV =
            netflixOriginalSeries[getRandomNumber(netflixOriginalSeries.length)];
        console.log(randomHeroSectionSeries);
        setHeroSectionSeries(randomHeroSectionSeries);
    }

    useEffect(() => {
        loadOriginals();
    }, [])

    return (
        <Box>
            <Box className={"banner"} marginBottom={"40px"}
                 bgImage={`url("https://image.tmdb.org/t/p/original/${heroSectionSeries?.backdrop_path}")`}
                 bgPosition={"center top"}
                 bgRepeat={"no-repeat"}
                 objectFit={"contain"}
                 bgSize={"cover"}
                 position={"relative"}
                 minHeight={"650px"}
                 style={{}}>
                <Box height={"100%"} width={"100%"} position={"absolute"}
                     className={"banner__overlay"}>
                    <Box className={"banner__contents"}>
                        <Box>
                            <Heading as={"h1"} fontSize={"3.3rem"} textColor={"teal.50"}
                                     className="banner__title">
                                {heroSectionSeries?.name}
                            </Heading>
                        </Box>
                        <Box>
                            <ButtonGroup>
                                <Button colorScheme={"teal"} variant={"outline"}
                                        color={"teal.400"}
                                        width={"130px"}
                                        className={"banner__button"}>
                                    {/*<Image src={film} minHeight="10px"/>*/}
                                    Watch
                                </Button>
                                <Button colorScheme={"teal"} variant={"outline"}
                                        color={"teal.400"}
                                        width={"130px"}
                                        className={"banner__button"}>
                                    Add to list
                                </Button>
                            </ButtonGroup>

                        </Box>
                        <Box>
                            <Text fontSize={"1.3rem"} textColor={"teal.50"} className={"banner__description"}>
                                {truncate(heroSectionSeries?.overview, 150)}
                            </Text>
                        </Box>
                    </Box>
                    <div className="banner__fadeBottom">
                    </div>
                </Box>
            </Box>
        </Box>

    )
}