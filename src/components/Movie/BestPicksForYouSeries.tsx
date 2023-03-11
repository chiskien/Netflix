import React, {useCallback, useEffect, useState} from "react";
import {Box, Heading, SimpleGrid, Skeleton} from "@chakra-ui/react";
import {SeriesCard} from "../Series/SeriesCard";
import {TV} from "../../models/Movie";
import {getMyBiasSeries} from "../../services/getBiasedSeries.service";
import {arraySeriesNumbers} from "../../models/SeriesId";


export const BestPicksForYouSeries: React.FC<{ title: string }> = ({title}) => {
    const [tvs, setTvs] = useState<TV[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getData = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        const data: TV[] = await getMyBiasSeries(arraySeriesNumbers);
        setTvs(data);
        setIsLoading(false);

    }, [])

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <Box marginTop={"20px"}>
            <Heading as={"h2"} size={"xl"} marginBottom={"20px"} textColor={"#F5F5F4"}>
                {title}
            </Heading>
            <Skeleton isLoaded={!isLoading}>
                <SimpleGrid columns={8} spacing={3} className={"movie__list"}>
                    {
                        tvs.map((tv) => (
                            <SeriesCard key={tv.id} tv={tv}/>
                        ))
                    }
                </SimpleGrid>
            </Skeleton>
        </Box>
    );
}