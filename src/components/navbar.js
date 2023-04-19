import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";

function NavBar({ setShowMenu }) {
  const [isOpen, setOpen] = useState(true);

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div
      className={isOpen ? "headerContainerFadeIn" : "headerContainerFadeOut"}
    >
      <button
        className="menuIcon"
        onClick={(e) => {
          e.preventDefault();
          setOpen(false);
          setTimeout(closeMenu, 230);
        }}
      >
        <CgCloseO className="cake" />
      </button>
      <nav className="navContainer">
        <NavLink className="nav_link"></NavLink>
        <NavLink className="nav_link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav_link">
          Projects
        </NavLink>
        <NavLink className="nav_link">Skills</NavLink>
        <NavLink className="nav_link">Connect</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
