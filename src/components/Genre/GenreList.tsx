import {Genre} from "../../models/Movie";
import React from "react";

export const GenreList: React.FC<{ genres: Genre[] }> = ({genres}) => {
    return (
        <div>
            <h1>Genre Lists: </h1>
            <ul>
                {genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}
                    </li>
                })}
            </ul>
        </div>);
}