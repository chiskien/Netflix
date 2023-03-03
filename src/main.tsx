import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./components/Auth/Login";
import {Register} from "./components/Auth/Register";
import {ErrorPage} from "./components/Error/ErrorPage";
import {RouteLayout} from "./components/RouteLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login", element: <Login/>, errorElement: <ErrorPage/>

    }, {
        path: "/register", element: <Register/>, errorElement: <ErrorPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </React.StrictMode>,
)
