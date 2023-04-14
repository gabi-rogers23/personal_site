import React, { useState } from "react";
import { About, Projects, SkillStack, Connect, NavBar } from "./exports";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu ? (
        <NavBar setShowMenu={setShowMenu} />
      ) : (
        <button
          className="menuIcon"
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(true);
          }}
        >
          <CgMenuCake className="cake" />
        </button>
      )}
      <div className="homeContainer">
        <div className="nameLogo">
          <div className="name">
            <div className="bigletter">G</div>
            <h1>abrielle</h1>
          </div>
          <div className="name">
            <div className="bigletter">R</div>
            <h1>ogers</h1>
          </div>
        </div>
        <div>
          <div className="homeDetails">
            <div>
              <i>Fullstack Web Developer</i>
            </div>
            <div className="downArrow">
              <FaAngleDown />
            </div>
          </div>
        </div>
        <div className="about">
          <About />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="skills">
          <SkillStack />
        </div>
        <div className="connect">
          <Connect />
        </div>
      </div>
    </>
  );
};

export default Home;
