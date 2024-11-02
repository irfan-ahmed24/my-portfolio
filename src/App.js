import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Education />
    </div>
  );
}
export default App;
