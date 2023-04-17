import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";

function NavBar(props) {
  return (
    <div className="headerContainer">
      <button
        className="menuIcon"
        onClick={(e) => {
          e.preventDefault();
          props.setShowMenu(false);
        }}
      >
        <CgCloseO className="cake" />
      </button>
      <nav className="navContainer">
        <NavLink to="/" end className="nav_link"></NavLink>
        <NavLink to="/about" className="nav_link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav_link">
          Projects
        </NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Connect</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
