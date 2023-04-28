import React, { useState, useRef } from "react";
import { About, Projects, SkillStack, Connect, NavBar } from "./exports";
import { FaAngleDown } from "react-icons/fa";
import { CgMenuCake } from "react-icons/cg";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const homeSection = useRef()
  const aboutSection = useRef()
  const projectSection = useRef()
  const skillSection = useRef()
  const contactSection = useRef()

  const scrollTo = (pageSection) => { window.scrollTo({ top: pageSection.current.offsetTop, behavior: 'smooth', transition: '1s' });}

  return (
    <>
      {showMenu ? (
        <NavBar setShowMenu={setShowMenu} scrollTo={scrollTo} aboutSection={aboutSection} projectSection={projectSection} skillSection={skillSection} contactSection={contactSection} homeSection={homeSection}/>
      ) : (
        <button
          className="menuIcon"
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(true);
          }}
        >
          {console.log(showMenu)}
          <CgMenuCake className="cake" />
        </button>
      )}
      {console.log(showMenu)}
      <div className="homeContainer" onClick={()=>{
        setShowMenu(false)
      }}>
        <div className="nameLogo" ref={homeSection}>
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
            <div className="downArrow" onClick={((e)=>{
              e.preventDefault()
              scrollTo(aboutSection)
            })}>
              <FaAngleDown />
            </div>
          </div>
        </div>
        <div className="about" ref={aboutSection}>
          <About />
        </div>
        <div className="projects" ref={projectSection}>
          <Projects />
        </div>
        <div className="skills" ref={skillSection}>
          <SkillStack />
        </div>
        <div className="connect" ref={contactSection}>
          <Connect />
        </div>
      </div>
    </>
  );
};

export default Home;
