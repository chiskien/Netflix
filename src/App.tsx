import './App.css'
import {useEffect, useState} from "react";
import {getGenres, getPopularMovies} from "./services/movie.service";
import {Genre, Movie} from "./models/Movie";
import {HomePage} from "./components/HomePage/HomePage";

function App() {
    return (
        <div>
            <HomePage/>
        </div>
    )
}

export default App
