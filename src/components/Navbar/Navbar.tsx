import React, {useEffect, useState} from "react";
import "./Navbar.scss";
import {Box, Button, Stack} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";
import {Link} from "@chakra-ui/react";

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
            <Stack direction={"row"} className="nav__content">
                <Box>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                         alt="Netflix logo" className={"nav__logo"}/>
                </Box>
                <Stack spacing={"10px"} direction={"row"} alignItems={"center"}>
                    {user ?
                        (<img src="~/../peep-101.svg" alt="avatar" className={"nav__user-logo"}/>)
                        : (
                            <Stack direction={"row"} spacing={"20px"} className={"nav__user-actions"}>
                                <Link to={"/login"} className={"btn"}
                                      bgColor={"teal.400"}
                                      as={ReactLink} color={"teal.50"}
                                      textDecoration={"none"}>Login</Link>
                                <Link to={"/register"} as={ReactLink} textDecoration={"none"}
                                      className={"btn"} bgColor={"teal.400"}
                                      color={"teal.50"}>Register</Link>
                            </Stack>
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    )
}