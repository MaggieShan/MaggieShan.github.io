import "./App.scss";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import React, { useState, useEffect } from "react";

function App() {
    const [width, setWidth] = useState(0); 
    const [height, setHeight] = useState(0); 
    const [isDesktop, setDevice] = useState(true); 

    const updateDimensions = () => {
        const new_width = window.innerWidth; 
        const new_height = window.innerHeight;
        
        setWidth(new_width);
        setHeight(new_height);

        if (width > 1024) {
            setDevice(true); 
        } else { setDevice(false); }
    }

    useEffect(() => {
        updateDimensions(); 
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    });

    const mobileStyle = {
        height: height,
        width: width,
    }
    
    return (
        <div className="App" style={mobileStyle}>
            <div className="scroll-container">
                <Header width={width} height={height} isDesktop={isDesktop} />
                {/* <About /> */}
                <Projects />
            </div>
            <Socials />
            <Nav width={width} height={height} isDesktop={isDesktop} />
        </div>
    );
}

export default App;