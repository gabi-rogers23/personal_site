import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./exports";

const Home = () => {
const navigate = useNavigate()

  return (
    <div className="homeContainer">
      <div className="nameLogo">
        <div className="name">
          <div className="bigletter">G</div>
          <h1>abrielle</h1>
        </div>

        <div className="name">
          <div className="bigletter">R</div>
          <h1>ogers</h1>
        </div>
      </div>
      <div>
        <div className="homeDetails">
          <div><i>Fullstack Web Developer</i></div>
          <button onClick={((e)=>{
            e.preventDefault();
            navigate("/about")
          })}>• About •</button>
          <button onClick={((e)=>{
            e.preventDefault();
            navigate("/projects")
          })}>• Projects •</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
