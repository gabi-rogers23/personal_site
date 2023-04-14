import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">
        <nav className="navContainer">
          <NavLink to="/" end className="nav_link">
          </NavLink>
          <NavLink to="/about" className="nav_link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/projects" className="nav_link">
            Projects
          </NavLink>
          <NavLink>
            Skills
          </NavLink>
          <NavLink>
            Connect
          </NavLink>
        </nav>
    </div>
  );
}

export default NavBar;
