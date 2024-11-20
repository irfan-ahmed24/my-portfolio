import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/project";
import Contact from "./components/contact";


function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
export default App;
