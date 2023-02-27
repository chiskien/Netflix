import React from "react";
import {Movie} from "../../models/Movie";

export const MovieCard: React.FC<{ movie: Movie }> = ({movie}) => {
    return (<div>
        <h1>{movie.id} - {movie.title}</h1>
    </div>)
}