import React from "react";
const self = require("./assets/Rogers_Gabrielle.jpeg");
import { FaCrow, FaHotdog } from "react-icons/fa";
import { ImCamera } from "react-icons/im";
import { MdOutlineDirectionsBike } from "react-icons/md";

const About = () => {
  return (
    <>
      <h1 className="hello">HELLO!</h1>
      <div className="aboutContainer">
        <div className="selfContainer">
          <img className="self" src={self}></img>
        </div>
        <div className="aboutParagraphs">
          <div className="start">I'm Gabrielle.</div>
          <div>
            <p>
              A passionate developer & designer excited about creating
              meaningful connections between people and their ideas. I have a
              Bachelor of Fine Arts in Photography and a certificate in
              fullstack web development from Fullstack Academy.
            </p>

            <p>
              When I'm not coding I can be found riding my bike through the
              streets of Chicago , making art, or at the Nature Museum preparing
              bird specimens for collections.              <MdOutlineDirectionsBike className="navIcon" />
              <FaHotdog className="navIcon" />
              <ImCamera className="navIcon" />
              <FaCrow className="navIcon" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
