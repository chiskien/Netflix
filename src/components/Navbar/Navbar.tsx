import React, {useEffect, useState} from "react";
import "./Navbar.scss";
import {Box, Image, Link, Stack, Text} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";
import login from "../../assets/icons/filled/log-in.svg";
import userIcon from "../../assets/icons/filled/user.svg";
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
            <Stack direction={"row"} className="nav__content" justifyContent={"space-between"}>
                <Stack width={"100%"} direction={"row"} alignItems={"center"} spacing={"20px"}>
                    <Box>
                        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                             alt="Netflix logo" className={"nav__logo"}/>
                    </Box>
                    <Stack direction={"row"} width={"70%"} spacing={"40px"} alignItems={"center"}>
                        <Link to={"/"} as={ReactLink} color={"teal.50"} className={"nav__link"}>
                            Home
                        </Link>
                        <Link to={"/movies"} as={ReactLink} color={"teal.50"} className={"nav__link"}>
                            Movies
                        </Link>
                        <Link to={"/series"} as={ReactLink} color={"teal.50"} className={"nav__link"}>
                            TV-Series
                        </Link>
                        <Link to={"/genre"} as={ReactLink} color={"teal.50"} className={"nav__link"}>
                            Genre
                        </Link>
                        <Link to={"/country"} as={ReactLink} color={"teal.50"} className={"nav__link"}>
                            Country
                        </Link>
                    </Stack>
                    <Box>
                        <Text>adasdsa</Text>
                    </Box>
                </Stack>
                <Stack spacing={"10px"} direction={"row"} alignItems={"center"}>
                    {user ?
                        (<img src="~/../peep-101.svg" alt="avatar" className={"nav__user-logo"}/>)
                        : (
                            <Stack direction={"row"} spacing={"20px"} className={"nav__user-actions"}>
                                <Link to={"/login"} className={"btn"}
                                      bgColor={"teal.400"}
                                      as={ReactLink} color={"teal.50"}
                                      textDecoration={"none"}>
                                    <Image width={"20%"} src={userIcon} marginRight={"3px"} minHeight="10px"/>
                                    Login
                                </Link>
                            </Stack>
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    )
}