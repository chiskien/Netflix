import React from "react";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
    return (
        <div className="nav">
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                 alt="Netflix logo"/>
            <img src="~/../peep-101.svg" alt="avatar"/>
        </div>
    )
}