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
           <HiOutlineMail className="navIcon" /> 
        </li>
        <li>,</li>
        <li>GitHub:  </li>
        <li>
            <TbBrandGithub className="navIcon" />
        </li>
        <li>,</li>
        <li>LinkedIn:</li>
        <li>
        <RiLinkedinBoxLine className="navIcon"/>
        </li>
        <li>{"}"}</li>
      </ul>
    </div>
  );
};

export default Footer;
