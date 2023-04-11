import React from "react";
const stranger = require("./assets/Stranger'sThings.png");

const Projects = () => {
  return (
    <>
      <h2 className="hello">PAST PROJECTS</h2>
      <div className="projectsContainer">
        <div className="projectSection">
          <div className="project">
            <img className="projectImg" src={stranger}></img>
            <div className="overlay"><h2 className="sectionTitle"> STRANGER'S THINGS</h2><div>Tech Stack: </div>
            </div>
          </div>
          <div className="project">
            <h2 className="sectionTitle">In The Books</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
