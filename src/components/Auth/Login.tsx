import React from "react";
import {Box, Image, Link, Stack} from "@chakra-ui/react";
import "../Navbar/Navbar.scss";
import {Link as ReactLink} from "react-router-dom";

export const Login: React.FC = () => {
    return (
        <Box className={`nav`}>
            {/*<Heading as="h1" size={"4xl"}>Netflix</Heading>*/}
            <Stack direction={"row"} className="nav__content">
                <Box>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                         alt="Netflix logo" className={"nav__logo"}/>
                </Box>
                <Stack spacing={"10px"} direction={"row"} alignItems={"center"}>
                    {
                        <img src="~/../peep-101.svg" alt="avatar" className={"nav__user-logo"}/>
                    }
                </Stack>
            </Stack>
        </Box>
    );
}