import {Genre} from "../../models/Movie";
import React from "react";

export const GenreList: React.FC<{ genres: Genre[] }> = ({genres}) => {
    return (<ul>
        {genres.map((genre) => {
            return <li>{genre.id} - {genre.name}</li>
        })
        }
    </ul>)
}