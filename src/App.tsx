import './App.scss'
import {HomePage} from "./components/HomePage/HomePage";
import {Navbar} from "./components/Navbar/Navbar";
import React from "react";
import {Container} from "@chakra-ui/react";
import {Banner} from "./components/Banner/Banner";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <Container margin={"0"} padding={"0"} maxW={"100vw"} className={"container"}>
            <Navbar/>
            <Banner/>
            <HomePage/>
            <Footer/>
        </Container>
    )
}

export default App
