import React from "react";
import {NavBar} from "./exports"

const Home = () => {
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
        <div className="homeDetails"><h1>Fullstack Web Developer</h1></div>
      <div>
        <NavBar /> 
      </div>
    </div>
  );
};

export default Home;
