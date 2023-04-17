import React from "react";
const stranger = require("./assets/Stranger'sThings.png");
const books = require("./assets/InTheBooks.png")
const fitness = require("./assets/fitness.png")
const mancala = require("./assets/Mancala.png")
import { IoIosOpen } from "react-icons/io";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <>
      <h2 className="mainTitle">PROJECTS</h2>
      <div className="projectsContainer">
        <div className="projectSection">
          <div className="project">
            <img className="projectImg" src={stranger}></img>
            <div className="overlay">
              <h2 className="sectionTitle"> STRANGER'S THINGS</h2>
              <div>
                An application where users can sign-in to buy and sell items.
              </div>
              <div>React | CSS | HTML </div>
              <div>
              <a href="https://nimble-gaufre-7509d1.netlify.app" target="_blank">
                <button>View Site
                  <IoIosOpen />
                </button></a>
                <a href="https://github.com/gabi-rogers23/StrangersThings" target="_blank">
                  <button>
                    GitHub
                    <TbBrandGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <img className="projectImg" src={books}></img>
            <div className="overlay">
              <h2 className="sectionTitle"> IN THE BOOKS</h2>
              <div>
              An e-commerce web application book store.
              </div>
              <div>React | CSS | HTML | Express | PostgreSQL | Bcrypt | Node | Faker | Notistack </div>
              <div>
              <a href="https://in-the-books.netlify.app" target="_blank">
                <button>View Site
                  <IoIosOpen />
                </button></a>
                <a href="https://github.com/gabi-rogers23/in_the_books" target="_blank">
                  <button>
                    GitHub
                    <TbBrandGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img className="projectImg" src={fitness}></img>
            <div className="overlay">
              <h2 className="sectionTitle"> FITNESS TRACK.R </h2>
              <div>
              An application where users can sign-in to create and track exercise routines.
              </div>
              <div>Express | PostgreSQL | Bcrypt | Node  </div>
              <div>
                <a href="https://github.com/gabi-rogers23/Fitness_Track.r" target="_blank">
                  <button>
                    GitHub
                    <TbBrandGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img className="projectImg" src={mancala}></img>
            <div className="overlay">
              <h2 className="sectionTitle"> MANCALA</h2>
              <div>
                Play the game Mancala!
              </div>
              <div>Javascript | HTML | CSS</div>
              <div>
              <a href="https://effortless-pastelito-8a73c3.netlify.app" target="_blank">
                <button>View Site
                  <IoIosOpen />
                </button></a>
                <a href="https://github.com/gabi-rogers23/arcade.Mancala" target="_blank">
                  <button>
                    GitHub
                    <TbBrandGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
