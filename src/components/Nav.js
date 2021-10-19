import '../styles/_Nav.scss'
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

function Nav(props) {
    const [isOpen, setOpen] = useState(false); 
    const toggleMenu = () => {
        setOpen(!isOpen); 
    }

    useEffect(() => {
        if(!props.isDesktop) {
            setOpen(false);
        }
    }, [props.isDesktop]);

    return (
        <div className="navi">
            <div class="ham">
                <label for="check">
                    <input 
                        type="checkbox" 
                        id="check" 
                        checked={isOpen}
                        onChange={toggleMenu}
                    />
                    <span />
                    <span />
                    <span /> 
                </label>
            </div>
            <div className={props.isDesktop ? "menu" : `mobile-menu ${isOpen ? "" : "hideMenu"}`}>
                {/* <Link
                    className="navi-item"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={toggleMenu}
                    >About </Link> */}
                <Link
                    className="navi-item"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={toggleMenu}
                    >Projects </Link>
                <a href="https://drive.google.com/file/d/1Xz4zFIJFhgtQrrcN2ukN8Lr7R3g94lPs/view?usp=sharing" className="navi-item" target="__blank">Resume</a>
            </div>
        </div>
    );
}

export default Nav; 