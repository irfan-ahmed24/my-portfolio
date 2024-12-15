import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div id="Project-section">
        <h1>Projects</h1>
        <div className="projects">
          <a href="https://luminous-zabaione-1d6288.netlify.app/">
            <img src="./picture/restaurent.png" alt="" />
            <div className="restaurent">
              <h3>Spicy King Restaurent</h3>
              <p>This website create for Spicy King Restaurent</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
