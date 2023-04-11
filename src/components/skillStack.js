import React from "react";
import { SiJavascript, SiReactrouter } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {TiHtml5, TiCss3} from "react-icons/ti";

const SkillStack = () => {
  return (
    <>
      <div className="mainTitle">SKILLS</div>
      <div className="skillsContainer">
        <ul className="iconSkills">
          <li>
            <SiJavascript className="icon"/>Javascript
          </li>
          <li>
          <GrReactjs className="icon"/> React
          </li>
          <li>
            <SiReactrouter className="icon"/>React Router
          </li>
          <li>
          <TiHtml5 className="icon"/> HTML 5
          </li>
          <li><TiCss3 className="icon"/> CSS3</li>
        </ul>
      </div>
    </>
  );
};

export default SkillStack;
