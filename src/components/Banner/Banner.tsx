import React, {useCallback, useEffect, useState} from "react";
import "./Banner.scss";
import {Box, Button, ButtonGroup, Heading, Image, Skeleton, Stack, Text} from "@chakra-ui/react";
import {getRandomNumber, transformSeries, truncate} from "../../helpers/helper";
import {TV} from "../../models/Movie";
import video from "../../assets/icons/filled/video.svg";
import bookmark from "../../assets/icons/regular/bookmark.svg";
import {getMyBiasSeries} from "../../services/getBiasedSeries.service";
import {arraySeriesNumbers} from "../../models/SeriesId";

export const Banner: React.FC = () => {
    const [heroSectionSeries, setHeroSectionSeries] = useState<TV>({
        episode_run_time: [], seasons: [],
        status: "",
        type: "",
        first_air_date_toDate: new Date(),
        first_air_date: "",
        backdrop_path: "",
        genres: [],
        id: 0,
        original_language: "",
        original_name: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        vote_average: 0,
        tagline: "",
        name: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);


    const loadOriginals2 = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        const bannerSeries: TV[] = await getMyBiasSeries(arraySeriesNumbers);
        let randomHeroSectionSeries: TV =
            bannerSeries[getRandomNumber(bannerSeries.length)];
        randomHeroSectionSeries = await transformSeries(randomHeroSectionSeries);
        setHeroSectionSeries(randomHeroSectionSeries);
        setIsLoading(false);

    }, []);

    useEffect(() => {
        loadOriginals2().then(r => console.log(r));
    }, [loadOriginals2])

    return (
        <Box>
            <Skeleton isLoaded={!isLoading}>
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
                        <Stack spacing={"70px"} direction={"column"}
                               className={"banner__contents"}>
                            <Box>
                                <Heading as={"h1"} fontSize={"3rem"} textColor={"teal.50"}
                                         fontFamily={"Noto Sans"}
                                         fontWeight={"600"}
                                         className="banner__title">
                                    {heroSectionSeries?.name}
                                </Heading>
                                <Stack direction={"row"} alignItems={"center"} spacing={"20px"} mt={"20px"} mb={"40px"}>
                                    <Button colorScheme={"teal"} height={"1.5rem"} width={"1.5rem"}>HD</Button>
                                    <Text>{heroSectionSeries.first_air_date_toDate.getFullYear()}</Text>
                                    <Text>{heroSectionSeries.episode_run_time}m</Text>
                                    <Stack spacing={"5px"} direction={"row"} className="banner__information">

                                        {heroSectionSeries.genres.map((genre) => (
                                            <Text color={"teal.300"} key={genre.id}>{genre.name}</Text>
                                        ))}
                                    </Stack>
                                </Stack>
                                <Text fontSize={"1.2rem"} textColor={"teal.50"}
                                      className={"banner__description"}>
                                    {truncate(heroSectionSeries?.overview, 150)}
                                </Text>
                            </Box>
                            <Box>
                                <ButtonGroup gap={"20px"}>
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
                            </Box>
                        </Stack>
                        <div className="banner__fadeRight">
                        </div>
                        <div className="banner__fadeLeft">
                        </div>
                        <div className="banner__fadeBottom">
                        </div>
                    </Box>
                </Box>
            </Skeleton>
        </Box>

    )
}
