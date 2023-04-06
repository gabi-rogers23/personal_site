import React, { useRef }  from "react";
import { About, Projects, SkillStack, Connect } from "./exports";
import {FaAngleDown} from "react-icons/fa";


const Home = () => {
const aboutSection = useRef(null);
const projectsSection = useRef(null);

const scrollTo = (pageSection) => { window.scrollTo({ top: pageSection.current.offsetTop, behavior: 'smooth', });}

  return (
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
          <div><i>Fullstack Web Developer</i></div>
          {/* <div><button onClick={((e)=>{
            e.preventDefault();
            scrollTo(aboutSection)
          })}>• About •</button>
          <button onClick={((e)=>{
            e.preventDefault();
            scrollTo(projectsSection)
          })}>• Projects •</button></div> */}
          <div className="downArrow"><FaAngleDown /></div>
        </div>
      </div>
          <div className="about" ref={aboutSection}><About /></div>
         <div className="projects" ref={projectsSection}><Projects /></div> 
         <div><SkillStack/></div>
         <div><Connect/></div>
    </div>
  );
};


export default Home;
