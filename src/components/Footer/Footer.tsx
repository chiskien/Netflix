import {Box, Center, Link} from "@chakra-ui/react";
import React from "react";
import {Link as ReactLink} from "react-router-dom";

export const Footer = () => {

    return (
        <Box width={"100%"} height={"300px"} bgColor={"#202020"}>

            <Center>
                <Box color={"teal.50"} fontSize={"2xl"}>
                    Made by <Link as={ReactLink} color={"teal.400"} to={"https://github.com/chiskien"}>
                    ChisKien
                </Link>
                </Box>
            </Center>
        </Box>)
}