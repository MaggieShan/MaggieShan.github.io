import "../styles/_Projects.scss";
import React from "react";
import { Element } from "react-scroll";

function Project(props) {
    return (
        <div className="project">
            <img alt={props.name} src={props.image}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.desc}</p> 
                <div className="links">
                    <a href={props.git} target="_blank" rel="noreferrer">{props.git ? "Github" : ""}</a> <br/>
                    <a href={props.dev} target="_blank" rel="noreferrer">{props.dev ? "Devpost" : ""}</a>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <Element className="scroll-section" id="projects">
            <div className="projects-heading">
                {/* <img alt="coin" src="coin.png" className="coin"></img> */}
                <h2>Currently working on this site!</h2>
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                <Project name="ChaChange" image="chachange.png"
                    desc="Chrome extension that leverages affilicate marketing to earn cash back on a user's purchanses. Funds are then used as mircrocredit loands to support projects for those in need through Kiva. Built for Hack the Globe 2021."
                    git="https://github.com/MaggieShan/cha-ching"
                    dev=""
                />
                <Project name="Cair" image="cair.png"
                    desc="Virtual babysitting app that uses face-tracking, SMS alerts, and playful UI to monitor and entertain children. Built for SheHacks 2021."
                    git="https://github.com/MaggieShan/VirtualBaysitter"
                    dev="https://devpost.com/software/cair-knzbi6"
                />
                <Project name="Unravel" image="unravel.png"
                    desc="Chrome extension to provide users a description of the environmental impacts linked to their purchases. Built for EnactusHacks 2021."
                    git="https://github.com/jason-qin2/unravel"
                    dev="https://devpost.com/software/unravel-nu2k3x"
                />
            </div>
        </Element>
    );
}

export default Projects; 