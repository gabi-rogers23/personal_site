import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footerContainer">
      <ul>
        <li>Contact Gabrielle Rogers</li>
        <li>
          <HiOutlineMail className="navIcon" /> 
        </li>
        <li>|</li>
        <li>
          <TbBrandGithub className="navIcon" />
        </li>
        <li>|</li>
        <li>
         <FiLinkedin className="navIcon"/>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
