import React from "react";
import {Movie} from "../../models/Movie";
import {Box, Card, CardBody, Heading, Image, Text} from "@chakra-ui/react";

export const MovieCard: React.FC<{ movie: Movie }> = ({movie}) => {
    const base_url: string = "https://image.tmdb.org/t/p/original"
    return (
        <Card maxW="lg" borderRadius={"lg"} marginBottom={"30px"}>
            <CardBody padding={0}>
                <Image src={`${base_url}/${movie?.poster_path}`}/>
                <Box padding={"20px"} className="movie__information">
                    <Heading size="md">{movie.title}</Heading>
                    <Text>
                        {movie.overview}
                    </Text>
                </Box>
            </CardBody>
        </Card>)
}