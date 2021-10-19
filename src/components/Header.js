import '../styles/_Header.scss'
import ThreeD from "./ThreeD";
import React from "react";
import { Element } from "react-scroll";

function Header() {
    return (
        <Element className="header scroll-section" id="home">
            <ThreeD />
            <div className="header-text">
            <h1>MAGGIE <br/> SHAN</h1>
            <h2 className="accent"><span className="accent">Hi</span>, nice to meet you!</h2> 
            <p>I'm a software engineer and designer focused on building immersive digital experiences.</p>
            </div>
        </Element>
    );
}

export default Header;