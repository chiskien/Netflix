import React from "react";
import "./Error.scss";
import {Box, Heading} from "@chakra-ui/react";

export const ErrorPage: React.FC = () => {
    return (
        <Box className="notFound">
            <Box className="img">
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
            </Box>
            <Box className="text">
                <Heading fontFamily={"Press Start 2P"} as={"h1"} color={"red"} size={"4xl"}>404</Heading>
                <h2>PAGE NOT FOUND</h2>
                <h3>BACK TO HOME?</h3>
                <a href="#" className="yes">YES</a>
                <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
            </Box>
        </Box>
    )
}