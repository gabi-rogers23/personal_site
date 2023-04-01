import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">

        <nav className="navContainer">
          <NavLink to="/" end className="nav_link">
            • Home •
          </NavLink>
          <NavLink to="/about" className="nav_link" activeClassName="active">
            • About •
          </NavLink>
          <NavLink to="/projects" className="nav_link">
            • Projects •
          </NavLink>
        </nav>
        <div className="header">
        <div id="navNameLogo">
          <div class="navBigLetter">G</div>
          <h1>abrielle</h1>
          <div class="navBigLetter">R</div>
          <h1>ogers</h1>
        </div></div>
    </div>
  );
}

export default NavBar;
