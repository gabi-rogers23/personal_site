import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Connect = () => {
  return (
    <>
      <div className="mainTitle">CONNECT</div>
      <div className="connectContainer">
        <ul className="connectList">
          <li>
            <a href="mailto:gabirogers23@gmail.com">
             Email <HiOutlineMail/>
            </a>
          </li>
          <li>
            <a href="https://github.com/gabi-rogers23" target="_blank">
              GitHub <TbBrandGithub/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rogers-gabrielle/"
              target="_blank"
            >
              LinkedIn <RiLinkedinBoxLine/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Connect;
