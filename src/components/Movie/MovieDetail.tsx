import React from "react";
import {Movie, TV} from "../../models/Movie";
import {Box} from "@chakra-ui/react";

type Props = {
    movie: Movie,
    series: TV
}

export const MovieDetail: React.FC<{ movie: Props }> = ({movie}) => {
    return (
        <Box>
            {movie.movie.title}
        </Box>)
}