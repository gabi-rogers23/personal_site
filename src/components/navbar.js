import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";

function NavBar({
  setShowMenu,
  scrollTo,
  aboutSection,
  projectSection,
  skillSection,
  contactSection,
  homeSection
}) {
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
        <li className="nav_link"    onClick={() => {
            scrollTo(homeSection);
          }}>Home</li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(aboutSection);
          }}
        >
          About
        </li>
        <li
          to="/projects"
          className="nav_link"
          onClick={() => {
            scrollTo(projectSection);
          }}
        >
          Projects
        </li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(skillSection);
          }}
        >
          Tool Kit
        </li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(contactSection);
          }}
        >
          Connect
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
