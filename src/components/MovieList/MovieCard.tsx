import React from "react";
import {Movie} from "../../models/Movie";

export const MovieCard: React.FC<{ movie: Movie }> = ({movie}) => {
    return (
        <div>
            <h3>{movie.title}</h3>
        </div>)
}