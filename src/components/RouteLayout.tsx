import React from "react";
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";

export const RouteLayout: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}