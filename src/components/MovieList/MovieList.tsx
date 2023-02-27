import {Movie} from "../../models/Movie";
import React from "react";
import {MovieCard} from "./MovieCard";

type MovieProps = {
    movies: Movie[]
}
export const MovieList: React.FC<MovieProps> = ({movies}) => {
    return (<div>
        <ul>
            {movies.map((movie) => (
                <li>{movie.id} - {movie.title}</li>
            ))}
        </ul>
    </div>)
}