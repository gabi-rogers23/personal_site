import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div id="navNameLogo" a href="/">
          <div class="navBigLetter">G</div>
          <h1>abrielle</h1>
          <div class="navBigLetter">R</div>
          <h1>ogers</h1>
        </div>
        <nav className="navContainer">
          <NavLink to="/" end className="nav_link">
            • Home •
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="navLink" activeClassName="active">
            ABOUT
            <>{<RiQuestionnaireFill />}</>
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className="navLink" activeClassName="active">
            PROJECTS
          </NavLink>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
