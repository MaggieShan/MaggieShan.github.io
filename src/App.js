import "./App.scss";
import ThreeD from "./components/ThreeD";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
// import About from "./components/About";
import React, { useState }  from "react";
import { Element } from "react-scroll";

function App() {
  const [coinDrop, setCoinDrop] = useState(false);

  return (
    <div className="App">
      <header className="header" id="home">
        <ThreeD coinDrop={coinDrop} />
        <div className="header-text">
          <h1>MAGGIE <br/> SHAN</h1>
          <h2 className="accent"><span className="accent">Hi</span>, nice to meet you!</h2> 
          <p>I'm a software engineer and designer focused on building immersive digital experiences.</p>
        </div>
      </header>
      <Nav setCoinDrop={setCoinDrop} />
      <Socials />
      <Element name="projects">
        <Projects />
      </Element>
      {/* <About /> */}
    </div>
  );
}

export default App;
