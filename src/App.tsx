import './App.css'
import {HomePage} from "./components/HomePage/HomePage";
import {Navbar} from "./components/Navbar/Navbar";
import React from "react";
import {Container} from "@chakra-ui/react";

function App() {
    return (
        <div>
            <Navbar/>
            <HomePage/>
        </div>
    )
}

export default App
