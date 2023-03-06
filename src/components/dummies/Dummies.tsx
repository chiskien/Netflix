import {useEffect, useState} from "react";
import {getAllNetworks} from "../../services/networks.service";
import {Network} from "../../models/Movie";
import {QueryClient, QueryClientProvider} from "react-query";
import {TestDummies} from "./TestDummies";

export const Dummies = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <TestDummies/>
        </QueryClientProvider>
    )
}
// const [networks, setNetwork] = useState<Network[]>([]);
// let dummiesNetwork: Network[];
// const loadData = async () => {
//     for (let i = 0; i < 500; i++) {
//         const response = await getAllNetworks(i);
//         if (response != null) {
//             dummiesNetwork?.push(response)
//
//         }
//     }
//     setNetwork(dummiesNetwork);
// }
// useEffect(() => {
//     loadData();
// }, [])
// return (
//     <div>
//         <ul>
//             {networks.map((network) => {
//                 return (<li>{network.name}</li>);
//             })}
//         </ul>
//     </div>)
