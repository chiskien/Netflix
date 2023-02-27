import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {MovieList} from "./components/MovieList/MovieList";
import {getLatestMovies} from "./services/movie.service";
import {Movie} from "./models/Movie";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadLatestMovies().then(r => console.log(r));
    }, [])
    const loadLatestMovies = async () => {
        const latestMovies: Movie[] = await getLatestMovies();
        setMovies(latestMovies);
    }
    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App
