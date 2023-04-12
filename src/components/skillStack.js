import React from "react";
import { SiJavascript, SiReactrouter, SiPostgresql, SiGithub, SiAdobecreativecloud } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {TiHtml5, TiCss3} from "react-icons/ti";

const SkillStack = () => {
  return (
    <>
      <div className="mainTitle">TOOL KIT</div>
      <div className="skillsContainer">
        <ul className="iconSkills">
          <li><SiJavascript className="icon"/>Javascript<p>Node.js | Express.js</p></li>
          <li><GrReactjs className="icon"/> React</li>
          <li><SiReactrouter className="icon"/>React Router</li>
          <li><TiHtml5 className="icon"/> HTML 5</li>
          <li><TiCss3 className="icon"/> CSS 3</li>
          <li><SiPostgresql className="icon"/>PostgreSQL</li>
          <li><SiGithub className="icon"/>GitHub</li>
          <li><SiAdobecreativecloud className="icon"/>Adobe Creative Cloud</li>
        </ul>
      </div>
    </>
  );
};

export default SkillStack;
