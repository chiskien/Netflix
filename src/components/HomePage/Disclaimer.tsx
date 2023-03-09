import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";
import {Code} from "@chakra-ui/react";

export const Disclaimer = () => {
    return (<Box className={"disclaimer"} mb={15} mt={10}>
        <Heading fontSize={"1.5rem"} color={"teal.50"} as={"h3"} mb={5}>
            Watch Movies Online Free
        </Heading>
        <Text color={"teal.50"} fontSize={"1rem"} lineHeight={"1.5"}>
            <Code>CremeDelaCreme.to</Code> - Just a better place to <b>watch movies online</b> for free.
            It allows you to watch movies online in high quality for free. No registration is required. The content is
            updated daily with fast streaming
            servers, multi-language subtitles supported. Just open <Code>CremeDelaCreme.to</Code> and watch your favorite movies,
            tv-shows. We have almost any movie, tv-shows you want to watch!
            Please help us by sharing this site with your friends. Thanks!
        </Text>
    </Box>)

}