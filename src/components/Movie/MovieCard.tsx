import React from "react";
import {Movie} from "../../models/Movie";
import {Box, Card, CardBody, Image, Link} from "@chakra-ui/react";
import {NavLink as ReactLink} from "react-router-dom";
import {truncate} from "../../helpers/helper";
import "./MovieCard.scss"
import {image_base_url} from "../../services/endpoints.service";

export const MovieCard: React.FC<{ movie: Movie }> = ({movie}) => {
    return (
        <Card borderRadius={"lg"} background={"#202020"} marginBottom={"30px"}
              className={"movie__card"}>
            <CardBody padding={0}>
                <Image src={`${image_base_url}/${movie.poster_path}`} className={"row__poster"}/>
                <Box padding={"15px"} className="movie__information">
                    <Link style={{textDecoration: "none"}}
                          as={ReactLink} fontSize={"1rem"} color={"teal.50"} to={"/movie/detail"}>
                        {truncate(movie.title, 25)}
                    </Link>
                    {/*<Text>*/}
                    {/*    {truncate(movie.overview, 150)}*/}
                    {/*</Text>*/}
                </Box>
            </CardBody>
        </Card>)
}