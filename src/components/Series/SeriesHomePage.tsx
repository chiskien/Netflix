import {MovieList} from "../Movie/MovieList";
import {hboOriginalsUrl, netflixOriginalsUrl} from "../../services/endpoints.service";
import React from "react";

export const SeriesHomePage: React.FC<{ isMovie: boolean }> = ({isMovie}) => {
    return (<div>
        <MovieList title={"HBO Originals"} apiUrl={`${hboOriginalsUrl}`} page={1}
                   isMovie={!isMovie}/>
        <MovieList title={"Netflix Originals"} page={1} apiUrl={`${netflixOriginalsUrl}`}
                   isMovie={!isMovie}/>
    </div>)
}