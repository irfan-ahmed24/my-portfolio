import React from "react";

function Home() {
  return (
    <div className="home" id="home">
      <h1>Home</h1>
      <div className="Home-page">
        <div className="photo">
          <img src="./picture/irfan.jpg" />
        </div>
        <div className="intro">
          <span>
            <h3>Welcome to my portfolio</h3>
            <h2>Hello, I'm Irfan Ahmed</h2>
            <h3>Web Developer</h3>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Home;
