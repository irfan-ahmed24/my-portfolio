import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div id="Education">
        <h1 className="title">Education</h1>
        <div className="Edu-description">
          <div className="SSC">
            <h2>Secoundary School Certificate (SSC)</h2>
            <span>
              <p>Chandanbari Islamia Kamil Madrasha</p>
              <p>2019-2020</p>
              <p>GPA:4.78 (Out of 5.00)</p>
            </span>
          </div>
          <div className="HSC">
            <h2>Higher School Certificate (HSC)</h2>
            <span>
              <p>From Chandanbari islamia kamil madrasha</p>
              <p>2021-2022</p>
              <p>GPA:4.88 (Out of 5.00)</p>
            </span>
          </div>
          <div className="BSc">
            <h2>Bachelor of Science (BSc)</h2>
            <span>
              <p>
                International University Bussiness Agricalture and Technology
                (IUBAT)
              </p>
              <p>2023-Continue</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
