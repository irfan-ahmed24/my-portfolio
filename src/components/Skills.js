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
                <h3>90%</h3>
                <h4>HTML</h4>
              </span>
            </div>
            <div className="circular c-css">
              <span>
                <h3>80%</h3>
                <h4>CSS</h4>
              </span>
            </div>
            <div className="circular c-js">
              <span>
                <h3>70%</h3>
                <h4>Javascript</h4>
              </span>
            </div>
            <div className="circular c-react">
              <span>
                <h3>20%</h3>
                <h4>React</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
