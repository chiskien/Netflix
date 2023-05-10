import React, {useCallback, useEffect, useState} from "react";
import "./Banner.scss";
import {Box, Button, ButtonGroup, Heading, Image, Link, Skeleton, Stack, Text} from "@chakra-ui/react";
import {transformSeries, truncate} from "../../helpers/helper";
import {TV} from "../../models/Movie";
import video from "../../assets/icons/filled/video.svg";
import bookmark from "../../assets/icons/regular/bookmark.svg";
import {getMyBiasSeries} from "../../services/getBiasedSeries.service";
import {arraySeriesNumbers} from "../../models/SeriesId";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Link as ReactLink} from "react-router-dom";

export const Banner: React.FC = () => {
    // const [heroSectionSeries, setHeroSectionSeries] = useState<TV>({
    //     episode_run_time: [], seasons: [],
    //     status: "",
    //     type: "",
    //     first_air_date_toDate: new Date(),
    //     first_air_date: "",
    //     backdrop_path: "",
    //     genres: [],
    //     id: 0,
    //     original_language: "",
    //     original_name: "",
    //     overview: "",
    //     popularity: 0,
    //     poster_path: "",
    //     vote_average: 0,
    //     tagline: "",
    //     name: ""
    // });
    const [heroSectionSeriesArr, setHeroSectionSeriesArr] = useState<TV[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadOriginals2 = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        let bannerSeries: TV[] = await getMyBiasSeries(arraySeriesNumbers);
        // let randomHeroSectionSeries: TV =
        //     bannerSeries[getRandomNumber(bannerSeries.length)];
        // randomHeroSectionSeries = await transformSeries(randomHeroSectionSeries);
        bannerSeries = transformSeries(bannerSeries);
        setHeroSectionSeriesArr(bannerSeries);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        loadOriginals2().then(r => console.log(r));
    }, [loadOriginals2])

    return (
        <Skeleton isLoaded={!isLoading}>
            <Box>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{clickable: true,}}
                    modules={[Autoplay, Pagination, Navigation]}>
                    {
                        heroSectionSeriesArr.map((tv) =>
                            (
                                <SwiperSlide key={tv.id}>
                                    <Box className={"banner"} marginBottom={"40px"}
                                         bgImage={`url("https://image.tmdb.org/t/p/original/${tv.backdrop_path}")`}
                                         bgPosition={"center top"}
                                         bgRepeat={"no-repeat"}
                                         objectFit={"contain"}
                                         bgSize={"cover"}
                                         position={"relative"}
                                         height={"650px"}
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
                                                        {tv?.name}
                                                    </Heading>
                                                    <Stack direction={"row"} alignItems={"center"} spacing={"20px"}
                                                           mt={"20px"} mb={"40px"}>
                                                        <Button colorScheme={"teal"} height={"1.5rem"}
                                                                width={"1.5rem"}>HD</Button>
                                                        <Text color={"teal.50"}
                                                              className={"banner_textShadow"}>{tv.first_air_date_toDate.getFullYear()}</Text>
                                                        <Text color={"teal.50"}
                                                              className={"banner_textShadow"}>{tv.episode_run_time}m</Text>
                                                        <Stack spacing={"5px"} direction={"row"}
                                                               className="banner__information">

                                                            {tv.genres.map((genre) => (
                                                                <Text color={"teal.300"}
                                                                      key={genre.id}>{genre.name}</Text>
                                                            ))}
                                                        </Stack>
                                                    </Stack>
                                                    <Text fontSize={"1.2rem"} textColor={"teal.50"}
                                                          className={"banner__description banner_textShadow"}>
                                                        {truncate(tv?.overview, 150)}
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <ButtonGroup gap={"20px"}>
                                                        <Link as={ReactLink} to={"/home"}
                                                              textDecoration={"none !important"}>
                                                            <Button colorScheme={"teal"} variant={"solid"}
                                                                    width={"150px"}
                                                                    bgColor={"teal.400"}
                                                                    borderRadius={"10px"}
                                                                    className={"banner__button play__button"}>
                                                                <Image width={"25%"} src={video} marginRight={"5px"}
                                                                       minHeight="10px"/>
                                                                Watch
                                                            </Button>
                                                        </Link>
                                                        <Link as={ReactLink} to={"/home"}
                                                              textDecoration={"none !important"}>
                                                            <Button colorScheme={"whiteAlpha"} variant={"outline"}
                                                                    color={"teal.200"}
                                                                    width={"150px"}
                                                                    borderRadius={"15px"}
                                                                    className={"banner__button"}>
                                                                <Image width={"20%"} src={bookmark} marginRight={"5px"}
                                                                       minHeight="10px"/>
                                                                Add to list
                                                            </Button>
                                                        </Link>
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
                                </SwiperSlide>
                            )
                        )
                    }

                </Swiper>
            </Box>
        </Skeleton>

    )
}
