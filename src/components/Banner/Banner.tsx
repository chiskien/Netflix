import React, {useEffect, useState} from "react";
import "./Banner.scss";
import {Box, Button, ButtonGroup, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {getRandomNumber, truncate} from "../../helpers/helper";
import {Movie, TV} from "../../models/Movie";
import {getNetflixOriginal} from "../../services/netflix-original.service";
import video from "../../assets/icons/filled/video.svg";
import bookmark from "../../assets/icons/regular/bookmark.svg";

export const Banner: React.FC = () => {
    const [heroSectionSeries, setHeroSectionSeries] = useState<TV>({
        adult: false,
        backdrop_path: "",
        genre_ids: [],
        genres: [],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        revenue: 0,
        tagline: "",
        title: "",
        vote_count: 0,
        name: ""
    });
    const [heroSectionTV, setHeroSectionTVs] = useState<Movie[]>([]);
    const loadOriginals = async () => {
        const response = await getNetflixOriginal();
        const netflixOriginalSeries: TV[] = response.results;
        const randomHeroSectionSeries: TV =
            netflixOriginalSeries[getRandomNumber(netflixOriginalSeries.length)];
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
                 height={"670px"}
                 style={{}}>
                <Box height={"100%"} width={"100%"} position={"absolute"}
                     className={"banner__overlay"}>
                    <div className={"banner__fadeTop"}></div>
                    <Stack spacing={"50px"} direction={"column"}
                           className={"banner__contents"}>
                        <Heading as={"h1"} fontSize={"3.2rem"} textColor={"teal.50"}
                                 fontFamily={"Noto Sans"}
                                 fontWeight={"600"}
                                 className="banner__title">
                            {heroSectionSeries?.name}
                        </Heading>
                        <Box className="banner__information">
                        </Box>
                        <Text fontSize={"1.2rem"} textColor={"teal.50"}

                              className={"banner__description"}>
                            {truncate(heroSectionSeries?.overview, 150)}
                        </Text>
                        <ButtonGroup>
                            <Button colorScheme={"teal"} variant={"solid"}
                                    width={"150px"}
                                    bgColor={"teal.400"}
                                    borderRadius={"10px"}
                                    className={"banner__button play__button"}>
                                <Image width={"25%"} src={video} marginRight={"5px"} minHeight="10px"/>
                                Watch
                            </Button>
                            <Button colorScheme={"whiteAlpha"} variant={"outline"}
                                    color={"teal.200"}
                                    width={"150px"}
                                    borderRadius={"15px"}
                                    className={"banner__button"}>
                                <Image width={"20%"} src={bookmark} marginRight={"5px"} minHeight="10px"/>
                                Add to list
                            </Button>
                        </ButtonGroup>
                    </Stack>
                    <div className="banner__fadeRight">
                    </div>
                    <div className="banner__fadeLeft">
                    </div>
                    <div className="banner__fadeBottom">
                    </div>
                </Box>
            </Box>
        </Box>

    )
}