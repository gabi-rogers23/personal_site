import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeHeartFill, RiQuestionnaireFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="headerContainer">
      <nav>
        <ul>
        <li>
          <NavLink to="/" end className="navLink" activeClassName="active">
            HOME{<RiHomeHeartFill />}
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
