import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";
import {Code} from "@chakra-ui/react";

export const Disclaimer = () => {
    return (<Box className={"disclaimer"} mb={"40px"} mt={10}>
        <Heading fontSize={"1.7rem"} color={"teal.50"} as={"h3"} mb={5}>
            Watch Movies Online Free
        </Heading>
        <Text color={"teal.50"} fontSize={"1rem"} lineHeight={"1.8"}>
            <Code>CremeDelaCreme.to</Code> - Just a better place to <b>watch movies online</b> for free.
            It allows you to <Text display={"inline"} color={"teal.300"}>watch movies online</Text> in high quality for
            free. No registration is required. The content is
            updated daily with <Text display={"inline"} color={"teal.300"}>fast streaming servers</Text> ,
            multi-language subtitles supported. Just open <Code>CremeDelaCreme.to</Code> and watch your
            favorite movies,
            tv-shows. We have almost any movie, tv-shows you want to watch!
            Please help us by sharing this site with your friends. Thanks!
        </Text>
    </Box>)

}