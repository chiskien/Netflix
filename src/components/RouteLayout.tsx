import React from "react";
import {Outlet} from "react-router-dom";

export const RouteLayout: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}