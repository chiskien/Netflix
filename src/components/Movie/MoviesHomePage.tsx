import {MovieList} from "./MovieList";
import {popularMoviesUrl, topRatedMoviesUrl} from "../../services/endpoints.service";
import React from "react";

export const MoviesHomePage: React.FC<{ isMovie: boolean }> = ({isMovie}) => {
    return (
        <div>
            <MovieList title={"Most popular movies"}
                       apiUrl={`${popularMoviesUrl}`} page={1}
                       isMovie={isMovie}/>
            <MovieList title={"Most Rated Movies"} page={1}
                       apiUrl={`${topRatedMoviesUrl}`}
                       isMovie={isMovie}/>
        </div>
    )
}