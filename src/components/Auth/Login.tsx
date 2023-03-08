import React from "react";
import "./Login.scss";
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Image,
    Input,
    Link,
    Spacer,
    Stack
} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";

export const Login: React.FC = () => {
    return (
        <Container
            maxH={"100vh"} maxW={"100vw"} padding={0} margin={0}
            // bgImage={"https://res.cloudinary.com/dhihq4dym/image/upload/v1678005856/the_last_of_us_tv_series_2023-wallpaper-1920x1080_u6gqqr.jpg"}
            // boxSizing={"border-box"}
            // bgSize={"cover"}
            // zIndex={200}
        >
            <Box className="overlay">
                <Stack className={"login__nav"} direction={"row"} alignItems={"center"}
                       justifyContent={"space-between"}
                       width={"100%"} minHeight={"65px"}>
                    <Box paddingLeft={"20px"}>
                        <Link as={ReactLink} to={"/"}>
                            <Image objectFit={"contain"}
                                   width={"100px"}
                                   src={"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"}></Image>
                        </Link>
                    </Box>
                    <Box paddingRight={"20px"}>

                        <Link to={"/register"} as={ReactLink} textDecoration={"none"}
                              className={"btn"} bgColor={"teal.400"}
                              color={"teal.50"}>Sign Up</Link>

                    </Box>
                </Stack>
                <Box top={"50%"} className={"form__wrapper"}
                     width={"450px"}
                     height={"500px"}
                     transform={"translate(-50%, -50%)"} left={"50%"} position={"absolute"}>

                    <Box padding={"40px"}>
                        <Center as={"h2"} fontSize={"2xl"} mb={8} fontFamily={"Sniglet"} color={"black"}>SIGN
                            IN</Center>
                        <form action="">
                            <FormControl isRequired>
                                <FormLabel>Your Email</FormLabel>
                                <Input type={"email"} placeholder={"example@email.com"}/>
                            </FormControl>
                            <FormControl isRequired mt={4} mb={8}>
                                <FormLabel>Password</FormLabel>
                                <Input type={"password"}/>
                            </FormControl>
                            <Stack direction={"row"}>
                                <Checkbox value={"remember"}>Remember Me</Checkbox>
                                <Spacer></Spacer>
                                <Link color={"teal.600"} as={ReactLink} to={"/forgotpass"}>Forgot Password</Link>
                            </Stack>
                            <Box marginY={"20px"}>
                                <Button width={"100%"} boxShadow={"3px 8px 14px 3px rgba(0,0,0,0.1);"}
                                        colorScheme={"teal"}>Login</Button>
                            </Box>
                            <ButtonGroup gap={4} width={"100%"}>
                                <Button width={"50%"} colorScheme={"facebook"}
                                        boxShadow={"6px 10px 9px 0px rgba(0,0,0,0.1); "}>
                                    FaceBook
                                </Button>
                                <Button width={"50%"} colorScheme={"twitter"}
                                        boxShadow={"6px 10px 9px 0px rgba(0,0,0,0.1); "}>
                                    Twitter
                                </Button>
                            </ButtonGroup>
                        </form>
                    </Box>


                </Box>
            </Box>
        </Container>
    );
}