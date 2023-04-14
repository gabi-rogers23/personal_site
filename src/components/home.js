import React, { useRef, useState } from "react";
import { About, Projects, SkillStack, Connect, NavBar } from "./exports";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const aboutSection = useRef(null);
  const projectsSection = useRef(null);

  const scrollTo = (pageSection) => {
    window.scrollTo({ top: pageSection.current.offsetTop, behavior: "smooth" });
  };

  return (<><button className="menuIcon"><CgMenuCake className="cake"/></button>
    <NavBar/>
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
          {/* <div><button onClick={((e)=>{
            e.preventDefault();
            scrollTo(aboutSection)
          })}>• About •</button>
          <button onClick={((e)=>{
            e.preventDefault();
            scrollTo(projectsSection)
          })}>• Projects •</button></div> */}
          <div className="downArrow">
            <FaAngleDown />
          </div>
        </div>
      </div>
      <div className="about" ref={aboutSection}>
        <About />
      </div>
      <div className="projects" ref={projectsSection}>
        <Projects />
      </div>
      <div className="skills">
        <SkillStack />
      </div>
      <div className="connect">
        <Connect />
      </div>
    </div></>
  );
};

export default Home;
