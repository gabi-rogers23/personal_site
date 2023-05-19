import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";

function NavBar({
  setShowMenu,
  scrollTo,
  aboutSection,
  projectSection,
  skillSection,
  contactSection,
  homeSection,
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
        <CgCloseO className="close" />
      </button>
      <nav className="navContainer">
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(homeSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Home
        </li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(aboutSection);
            setTimeout(closeMenu, 230);
          }}
        >
          About
        </li>
        <li
          to="/projects"
          className="nav_link"
          onClick={() => {
            scrollTo(projectSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Projects
        </li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(skillSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Tool Kit
        </li>
        <li
          className="nav_link"
          onClick={() => {
            scrollTo(contactSection);
            setTimeout(closeMenu, 230);
          }}
        >
          Connect
        </li>
        <a
          className="nav_link"
          href="https://docs.google.com/document/d/1BehjqshZaFEpNsTt1kjcjpiGrwALbwLaRUkSShFpmLQ/edit?usp=sharing"
          target="_blank"
          onClick={()=> closeMenu()}
        >
        Resume
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
