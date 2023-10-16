import React from "react";
import { SiJavascript, SiReactrouter, SiPostgresql, SiAdobecreativecloud } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {TiHtml5, TiCss3} from "react-icons/ti";
import { BiLogoSpringBoot, BiLogoJava, BiLogoGit } from "react-icons/bi";
import { FaSalesforce } from "react-icons/fa";
import {TbBrandRedux} from "react-icons/tb";

const SkillStack = () => {
  return (
    <>
      <div className="mainTitle">TOOL KIT</div>
      <div className="skillsContainer">
        <ul className="iconSkills">
          <li><SiJavascript className="icon"/>Javascript<p>Node.js | Express.js</p></li>
          <li><GrReactjs className="icon"/> React</li>
          <li><TbBrandRedux className="icon"/>Redux</li>
          <li><TiHtml5 className="icon"/> HTML 5</li>
          <li><TiCss3 className="icon"/> CSS 3</li>
          <li><BiLogoSpringBoot className="icon"/>Spring Boot</li>
          <li><BiLogoJava className="icon"/>Java</li>
          <li><FaSalesforce className="icon"/>Salesforce</li>
          <li><SiPostgresql className="icon"/>PostgreSQL</li>
          <li><BiLogoGit className="icon"/>Git</li>
          <li><SiAdobecreativecloud className="icon"/>Adobe Creative Cloud</li>

          </ul>
      </div>
    </>
  );
};

export default SkillStack;
