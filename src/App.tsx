import './App.css'
import {HomePage} from "./components/HomePage/HomePage";
import {Navbar} from "./components/Navbar/Navbar";
import React from "react";
import {Container} from "@chakra-ui/react";

function App() {
    return (
        <Container margin={"0"} padding={"0"} maxW={"100vw"} className={"container"}>
            <Navbar/>
            <HomePage/>
        </Container>
    )
}

export default App
