import React from "react";
import git from "../Assets/img/github.png";
import linkedIn from "../Assets/img/LN.png";
import author from "../Assets/img/eimiCV.jpeg"

export default function About() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignContent:"center", alignItems:"center", width:"80vh", marginLeft: '30vh'}}>
      <h1 style={{margin:"0.3em"}}>About</h1>
      <img src={author} alt="Profile picture of Dev" style={{width:'250px', borderRadius: "9em", margin: '0.5em 2em'}}/>
      <p style={{textAlign:'justify', maxWidth: "50vh"}}>
        Hi, my name is Eimi I'm a FullStack Developer. I created this project
        using React, Redux, Node and Sequelize. If you are interested in
        learning more about me and my other habilities please follow the links
        below.
      </p>
      <div style={{display: "flex", flexDirection:"row", alignContent:"center", alignItems:"center", width:"60vh", justifyContent: "space-evenly"}}>
        <a href="https://github.com/jordimiyai">
          <img src={git} alt="GitHub" style={{width: "160px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/jordimiyai/">
          <img src={linkedIn} alt="LinkedIn" style={{width: "95px"}}/>
        </a>
      </div>
    </div>
  );
}
