import React from "react";
import {NavBar} from "./exports"
const self = require("./assets/Rogers_Gabrielle.jpeg")

const About = () => {
    return(  <> <NavBar/>
    <div className="aboutContainer">
        <div><img className="self" src={self}></img><h1>HELLO.</h1></div>
        <div className="aboutParagraphs">
            
<br/>
First and foremost, I am an artist. I love to create connections between people and ideas in surprising and unusual ways. Before Fullstack Academy, I spent 10 years building these connections as a freelance design manager for Pharma/Biopharma Fortune 500 companies. I worked with c-suite executives to help them communicate their ideas and data to their teams in a clear and engaging manner through the use of graphics, charts, and photography. During this time, I learned the importance of flexibility and creativity in problem-solving, as well as the ability to manage client expectations.
<p/>
<br/>
Most recently, I worked as a digital court reporter, where I used my communication skills to quickly assess the requirements of each individual job. Despite the creative challenges, I found that there were often little to no analytical challenges in this role. I knew that eventually, I would need to make a career change in order to fully exercise my passion for creativity and problem-solving.
<p/>
<br/>
Overall, I am excited to bring my artistic sensibility and problem-solving skills to the field of software engineering. I believe that my diverse background in design and communication has given me a unique perspective that will allow me to approach coding challenges in a creative and innovative way. I am looking forward to continuing to learn and grow in this exciting field!</div>
    </div></>)
}

export default About;