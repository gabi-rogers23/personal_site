import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">
      <nav className="nav-links">
        <li>
          <NavLink to="/" end activeClassName="active">
            {<RiHomeHeartFill />}
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeClassName="active">
            \ABOUT/
            {<RiQuestionnaireFill />}
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" activeClassName="active">
            PROJECTS
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
