import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">
      <div className="namelogo">
        <div className="bigletter">G</div>
        <h1>abrielle</h1>
        <div className="bigletter">R</div>
        <h1>ogers</h1>
      </div>
      <nav>
      <NavLink to="/" end>
        {<RiHomeHeartFill className="navIcon"/>}
      </NavLink>
      <NavLink to="/about" end>
        {<RiQuestionnaireFill className="navIcon"/>}
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
