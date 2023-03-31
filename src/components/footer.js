import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footerContainer">
      <ul>
        <li>contact</li>
        <li>{"="}</li>
        <li>{"{ email:  "}</li>
        <li>
        <a href="mailto:gabirogers23@gmail.com"> <HiOutlineMail className="navIcon" /> </a>
        </li>
        <li>,</li>
        <li>GitHub:  </li>
        <li>
          <a href="https://github.com/gabi-rogers23">  <TbBrandGithub className="navIcon" /></a>
        </li>
        <li>,</li>
        <li>LinkedIn:</li>
        <li>
        <a href="https://www.linkedin.com/in/rogers-gabrielle/"><RiLinkedinBoxLine className="navIcon"/></a>
        </li>
        <li>{"}"}</li>
      </ul>
    </div>
  );
};

export default Footer;
