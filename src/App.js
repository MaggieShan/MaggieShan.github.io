import "./App.scss";
import ThreeD from "./components/ThreeD";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import About from "./components/About";
import React, { useRef, createRef, useEffect, useState }  from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";

function App() {
  const [coinDrop, setCoinDrop] = useState(false);

  return (
    <div className="App">
      <header className="header" id="home">
        <ThreeD coinDrop={coinDrop}/>
        <div className="header-text">
          <h1>MAGGIE <br/> SHAN</h1>
          <p>I'm a developer, designer <br/> and student</p>
        </div>
      </header>
      <Nav setCoinDrop={setCoinDrop}/>
      <Socials />
      <Projects />
      <About />
    </div>
  );
}

export default App;
