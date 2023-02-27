import './App.css'
import {useEffect, useState} from "react";
import {getGenres, getLatestMovies} from "./services/movie.service";
import {Genre, Movie} from "./models/Movie";
import {MovieCard} from "./components/MovieList/MovieCard";
import {GenreList} from "./components/Genre/GenreList";

function App() {
    const [latestMovie, setLatestMovies] = useState<Movie>({id: 0, title: ""});
    const [genres, setGenres] = useState<Genre[]>([]);
    useEffect(() => {
        // loadLatestMovies();
        loadGenres();
    }, [])
    // const loadLatestMovies = async () => {
    //     const latestMovie: Movie = await getLatestMovies();
    //     setLatestMovies(latestMovie);
    // }
    const loadGenres = async () => {
        const response = await getGenres();
        const genres: Genre[] = response.genres;
        setGenres(genres);
    }
    return (
        <div>
            {/*<MovieCard movie={latestMovie}/>*/}
            <GenreList genres={genres}/>
        </div>
    )
}

export default App
