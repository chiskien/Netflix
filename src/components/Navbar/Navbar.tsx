import React, {useEffect, useState} from "react";
import "./Navbar.scss";
import {Box, Button, Stack} from "@chakra-ui/react";

export const Navbar: React.FC = () => {
    const [user, setUser] = useState<boolean>(false);
    const [isShowed, handleShow] = useState<boolean>(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar); //clean up code for scrolling
    }, []);

    return (
        <Box className={`nav ${isShowed && "nav__black"}`}>
            {/*<Heading as="h1" size={"4xl"}>Netflix</Heading>*/}
            <Box className="nav__content">
                <Box>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                         alt="Netflix logo" className={"nav__logo"}/>
                </Box>
                <Stack spacing={"10px"} direction={"row"} alignItems={"center"}>
                    {user ?
                        (<img src="~/../peep-101.svg" alt="avatar" className={"nav__user-logo"}/>)
                        : (<Button colorScheme={"teal"}>Login/Register</Button>)
                    }
                </Stack>
            </Box>
        </Box>
    )
}