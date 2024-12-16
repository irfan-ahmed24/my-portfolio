import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div id="Project-section">
        <h1>Projects</h1>
        <div className="projects">
          <a href="https://luminous-zabaione-1d6288.netlify.app/" target="blank">
            <img src="./picture/restaurent.png" alt="" />
            <div className="restaurent">
              <h3>Spicy King Restaurent</h3>
              <p>This website create for Spicy King Restaurent</p>
            </div>
          </a>
          <a href="https://harmonious-pavlova-c0d2ca.netlify.app/" target="blank">
            <img src="./picture/image_search.png" alt="" />
            <div className="restaurent">
              <h3>Image Search Engine</h3>
              <p>This website create to search Images</p>
            </div>
          </a>
          <a href="https://kari-abul-hasem-library.netlify.app/" target="blank">
            <img src="./picture/library.png" alt="" />
            <div className="restaurent">
              <h3>
                কারী আবুল হাসেম লাইব্রেরি</h3>
            </div>
          </a>
          <a href="https://kari-abul-hasem-library.netlify.app/" target="blank">
            <img src="./picture/library.png" alt="" />
            <div className="restaurent">
              <h3>
                কারী আবুল হাসেম লাইব্রেরি</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
