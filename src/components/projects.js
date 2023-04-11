import React from "react";
import {Navigate} from "react-router-dom"
const stranger = require("./assets/Stranger'sThings.png");
import { IoIosOpen } from "react-icons/io";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
    const navigate = Navigate();
  return (
    <>
      <h2 className="hello">PAST PROJECTS</h2>
      <div className="projectsContainer">
        <div className="projectSection">
          <div className="project">
            <img className="projectImg" src={stranger}></img>
            <div className="overlay"><h2 className="sectionTitle"> STRANGER'S THINGS</h2><div>An application where users can sign-in to buy and sell items.</div>
            <div>| React.js | CSS | HTML |</div>
            <div><button onClick={(e)=>{
                e.preventDefault()
                location.href="https://github.com/gabi-rogers23"
            }}><IoIosOpen/></button><button><TbBrandGithub/></button></div>
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
