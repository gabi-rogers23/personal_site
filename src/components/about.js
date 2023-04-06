import React from "react";
const self = require("./assets/Rogers_Gabrielle.jpeg");
import { FaCrow } from "react-icons/fa";
import { ImCamera } from "react-icons/im";
import { MdOutlineDirectionsBike } from "react-icons/md";
import {GrPersonalComputer} from "react-icons/gr"

const About = () => {
  return (
    <>
      <h1 className="hello">HELLO!          <div className="start">I'm Gabrielle.</div></h1>

      <div className="aboutContainer">
        <div className="selfContainer">
          <img className="self" src={self}></img>
        </div>
        <div className="aboutParagraphs">
            <h2><MdOutlineDirectionsBike/> <GrPersonalComputer/> About Me <ImCamera/> <FaCrow/></h2>
          <div>
            <p>
              I am a passionate developer & designer excited about creating
              meaningful connections between people and their ideas. I have a
              Bachelor of Fine Arts in Photography and a certificate in
              fullstack web development from Fullstack Academy.
            </p>

            <p>
              When I'm not coding I can be found riding my bike through the
              streets of Chicago , making art, or at the Nature Museum preparing
              bird specimens for collections.              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
