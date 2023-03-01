import React, {useEffect, useState} from "react";
import {TV} from "../../models/Movie";
import {getNetflixOriginal, getRandomNumber} from "../../services/netflix-original.service";
import {Box, Button, Heading} from "@chakra-ui/react";

export const Banner: React.FC = () => {
    const [heroSectionSeries, setHeroSectionSeries] = useState<TV>({
        backdrop_path: "" || null,
        id: 0,
        name: "",
        original_name: "",
        overview: "",
        poster_path: "" || null
    });

    const loadNetflixOriginal = async () => {
        const response = await getNetflixOriginal();
        const netflixOriginalSeries: TV[] = response.results;
        const randomHeroSectionSeries: TV =
            await netflixOriginalSeries[getRandomNumber(netflixOriginalSeries.length)];
        setHeroSectionSeries(randomHeroSectionSeries);
    }
    useEffect(() => {
        loadNetflixOriginal().then(r => console.log(r));
    }, [])

    return (
        <Box className={"banner"} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${heroSectionSeries?.backdrop_path}")`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            position: "relative",
            objectFit: "contain",
            minHeight: "650px"
        }}>
            <div className="banner__contents">
                <Heading as={"h2"} size={"xl"} className="banner__title">
                    {heroSectionSeries.name}
                </Heading>
                <Box className="banner__button">
                    <Button colorScheme={"teal"} variant={"solid"}
                            className={"banner__button"}>Watch Now</Button>
                    <Button colorScheme={"teal"} variant={"solid"}
                            className={"banner__button"}>Add to list</Button>
                </Box>
            </div>
        </Box>
    )
}