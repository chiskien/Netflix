import React from "react";
import {Movie} from "../../models/Movie";
import {Card, CardBody, Heading, Text} from "@chakra-ui/react";

export const MovieCard: React.FC<{ movie: Movie }> = ({movie}) => {
    return (
        <Card maxW="sm">
            <CardBody>
                <Heading size="md">{movie.title}</Heading>
                <Text>
                    {movie.overview}
                </Text>
            </CardBody>
        </Card>)
}