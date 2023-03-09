import React, {useRef} from "react";
import "./Login.scss";
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Container,
    FormControl,
    FormLabel,
    Image,
    Input,
    Link,
    Stack, useToast
} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";
import {auth} from "../../firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";

export const Register: React.FC = () => {

    //useRef Hook for getting value from input
    const emailRef = useRef<HTMLInputElement>(null!);
    const passRef = useRef<HTMLInputElement>(null!);

    //Charka UI: Toast
    const toast = useToast()
    //Submit Action
    const handleButtonSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        ).then((account) => {
            toast({
                title: "Account Created.",
                description: "We have created your account for you",
                isClosable: true,
                position: "bottom",
                duration: 2000,
                status: "success",
            })
        }).catch((err: Error) => {
            toast({
                title: err.name,
                description: err.message,
                isClosable: true,
                position: "bottom",
                duration: 4000,
                status: "error"
            })
            console.error(err.message);
        })
    }

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
                        <Link to={"/login"} as={ReactLink} textDecoration={"none"}
                              className={"btn"} bgColor={"teal.400"}
                              color={"teal.50"}>Sign In</Link>)
                    </Box>
                </Stack>
                <Box top={"50%"} className={"form__wrapper"}
                     width={"450px"}
                     minHeight={"550px"}
                     transform={"translate(-50%, -50%)"} left={"50%"} position={"absolute"}>
                    <Box padding={"40px"}>
                        <Center as={"h2"} fontSize={"2xl"} mb={8} fontFamily={"Sniglet"} color={"black"}>SIGN
                            UP</Center>

                        <form>
                            <FormControl isRequired>
                                <FormLabel>Your Email</FormLabel>
                                <Input
                                    ref={emailRef}
                                    type={"email"} placeholder={"example@email.com"}/>
                            </FormControl>
                            <FormControl isRequired mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input type={"password"}
                                />
                            </FormControl>
                            <FormControl isRequired mt={4} mb={8}>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input type={"password"}
                                       ref={passRef}
                                />
                            </FormControl>
                            <Box marginY={"20px"}>
                                <Button width={"100%"} boxShadow={"3px 8px 14px 3px rgba(0,0,0,0.1);"}
                                        colorScheme={"teal"} type={"submit"}
                                        onClick={handleButtonSubmit}>
                                    Sign Up
                                </Button>
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