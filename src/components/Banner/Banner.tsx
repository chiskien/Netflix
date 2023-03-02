import React, {useEffect, useState} from "react";
import "./Banner.scss";
import {DiscoverTv, TV} from "../../models/Movie";
import {getNetflixOriginal} from "../../services/netflix-original.service";
import {Box, Button, Heading, Text} from "@chakra-ui/react";
import {getRandomNumber, truncate} from "../../helpers/helper";

export const Banner: React.FC = () => {
    const [heroSectionSeries, setHeroSectionSeries] = useState<DiscoverTv>({
        adult: false,
        genre_ids: [],
        original_language: "",
        original_title: "",
        popularity: 0,
        release_date: "",
        revenue: 0,
        tagline: null,
        title: "",
        vote_count: 0,
        backdrop_path: "",
        id: 0,
        genres: [],
        name: "",
        overview: "",
        poster_path: ""
    });

    const loadNetflixOriginal = async () => {
        const response = await getNetflixOriginal();
        const netflixOriginalSeries: DiscoverTv[] = response.results;
        const randomHeroSectionSeries: DiscoverTv =
            await netflixOriginalSeries[getRandomNumber(netflixOriginalSeries.length)];
        console.log(randomHeroSectionSeries);
        setHeroSectionSeries(randomHeroSectionSeries);
    }
    useEffect(() => {
        loadNetflixOriginal();
    }, [])

    return (
        <Box className={"banner"} marginBottom={"50px"} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${heroSectionSeries?.backdrop_path}")`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            position: "relative",

            objectFit: "contain",
            minHeight: "650px"
        }}>
            <Box className={"banner__contents"}>
                <Box>
                    <Heading as={"h1"} fontSize={"2.5rem"} textColor={"teal.50"}
                             className="banner__title">
                        {heroSectionSeries?.name}
                    </Heading>
                </Box>
                <Box>
                    <Button colorScheme={"teal"} bgColor={"teal.400"} variant={"solid"}
                            borderRadius={"18px"} width={"150px"}
                            className={"banner__button"}>
                        Watch
                    </Button>
                    <Button colorScheme={"teal"} bgColor={"teal.400"} variant={"solid"}
                            borderRadius={"18px"} width={"150px"}
                            className={"banner__button"}>
                        Add to list
                    </Button>
                </Box>
                <Box>
                    <Text fontSize={"1.3rem"} textColor={"teal.50"} className={"banner__description"}>
                        {truncate(heroSectionSeries?.overview, 150)}
                    </Text>
                </Box>
            </Box>
            <div className="banner__fadeBottom">

            </div>
            <div className="banner__fadeLeft">

            </div>
            <div className="banner__fadeRight">

            </div>
        </Box>
    )
}