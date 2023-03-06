import React from "react";
import "./Login.scss";
import {Box, Button, Image, Link, Spacer, Stack, Container} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";

export const Login: React.FC<{ isLogin: boolean }> = ({isLogin = false}) => {
    return (
        <Container
            bgImage={"https://res.cloudinary.com/dhihq4dym/image/upload/v1678005856/the_last_of_us_tv_series_2023-wallpaper-1920x1080_u6gqqr.jpg"}
            minHeight={"100vh"} minW={"100vw"} padding={0} margin={0}
            bgSize={"cover"}
            zIndex={200}>
            <Box className="overlay">

                <Stack className={"login__nav"} direction={"row"} alignItems={"center"}
                       justifyContent={"space-between"}
                       width={"100%"} minHeight={"65px"}>
                    <Box paddingLeft={"20px"}>
                        <Image objectFit={"contain"}
                               width={"100px"}
                               src={"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"}></Image>
                    </Box>
                    <Box paddingRight={"20px"}>
                        {
                            isLogin ? (
                                    <Link to={"/login"} as={ReactLink} textDecoration={"none"}
                                          className={"btn"} bgColor={"teal.400"}
                                          color={"teal.50"}>Login</Link>)
                                : (
                                    <Link to={"/register"} as={ReactLink} textDecoration={"none"}
                                          className={"btn"} bgColor={"teal.400"}
                                          color={"teal.50"}>Sign Up</Link>)
                        }
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}