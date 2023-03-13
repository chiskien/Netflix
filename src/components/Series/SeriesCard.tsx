import React from "react";
import {TV} from "../../models/Movie";
import {Box, Card, CardBody, Image, Link, Skeleton, Tooltip} from "@chakra-ui/react";
import {NavLink as ReactLink} from "react-router-dom";
import {transformSeries2, truncate} from "../../helpers/helper";
import "../Movie/MovieCard.scss"
import {image_base_url} from "../../services/endpoints.service";

export const SeriesCard: React.FC<{ tv: TV, isLoading: boolean }> = ({tv, isLoading}) => {
    const tvSeries = transformSeries2(tv);
    return (
        <Skeleton isLoaded={!isLoading}>
            <Tooltip label={tv.name} placement={"bottom"} hasArrow arrowSize={10} bgColor={"teal.500"}>
                <Card borderRadius={"lg"} background={"#202020"} marginBottom={"30px"}
                      className={"movie__card"}>
                    <CardBody padding={0}>
                        <Image src={`${image_base_url}/${tvSeries?.poster_path}`} className={"row__poster"}/>
                        <Box padding={"15px"} className="movie__information">
                            <Link style={{textDecoration: "none"}}
                                  as={ReactLink} fontSize={"1rem"} color={"teal.50"}
                                  to={"/tv/detail"}>
                                {truncate(tvSeries.name, 11.7)}
                            </Link>
                            {/*<Text>*/}
                            {/*    {truncate(tv.overview, 150)}*/}
                            {/*</Text>*/}
                        </Box>
                    </CardBody>
                </Card>
            </Tooltip>
        </Skeleton>
    )
}
