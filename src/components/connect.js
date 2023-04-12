import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Connect = () => {
    return(
    <>
    <div className="mainTitle">CONNECT</div>
    <div className="connectContainer">
        <ul className="connectList">
        <li>
        Email <a href="mailto:gabirogers23@gmail.com" > <HiOutlineMail className="navIcon" /> </a>
        </li>
        <li>
         GitHub <a href="https://github.com/gabi-rogers23" target="_blank">  <TbBrandGithub className="navIcon" /></a>
        </li>
        <li>
        LinkedIn<a href="https://www.linkedin.com/in/rogers-gabrielle/" target="_blank"><RiLinkedinBoxLine className="navIcon"/></a>
        </li>
      </ul>
    </div></>)
}

export default Connect;