import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div id="skill-section">
        <h1>Skills</h1>
        <div className="progress-bar">
          <div className="straight-line">
            <ul>
              <li className="html">HTML</li>
              <li className="css">CSS</li>
              <li className="js">Javascript</li>
              <li className="react">React js</li>
            </ul>
          </div>
          <div className="circular-bar">
            <div className="circular c-html">
              <span>
                <h2>90%</h2>
                <h3>HTML</h3>
              </span>
            </div>
            <div className="circular c-css">
              <span>
                <h2>80%</h2>
                <h3>CSS</h3>
              </span>
            </div>
            <div className="circular c-js">
              <span>
                <h2>70%</h2>
                <h3>Javascript</h3>
              </span>
            </div>
            <div className="circular c-react">
              <span>
                <h2>40%</h2>
                <h3>React</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
