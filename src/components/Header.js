import React from "react";
import globe from "../images/globeW.png"

function Header() {
    return (
        <header>
            <img className="globe" src={globe} alt="globe logo"/> 
            <h1 className="title">my travel journal.</h1>
        </header>
    );
}

export default Header;