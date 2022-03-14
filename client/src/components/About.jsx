import React from "react";
import git from "../Assets/img/github.png";
import linkedIn from "../Assets/img/LN.png";
import author from "../Assets/img/eimiCV.jpeg";
import mail from "../Assets/img/pngegg.png"

export default function About() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
      <h1 style={{margin:"0.3em", display: "flex", flexDirection: "row"}}>About Me</h1>
      <div style={{margin:"0.3em", display:"flex", alignItems:"center"}}>
      <img src={author} alt="Person with glasses" style={{width:'20rem', borderRadius: "0.3em", margin: '0.5em 2em'}}/>
      <p style={{textAlign:'justify', maxWidth: "20rem"}}>
        Hi, my name is Eimi I'm a FullStack Developer. I created this project
        using React, Redux, Node and Sequelize. If you are interested in
        learning more about me and my other habilities please contact me following the links
        below.
      </p>
      </div>
      <div style={{display: "flex", flexDirection:"row", alignContent:"center", alignItems:"center", width:"45rem", justifyContent: "space-around"}}>
        <a href="https://github.com/jordimiyai" target="_blank" rel="noreferrer">
          <img src={git} alt="GitHub" style={{width: "93px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/jordimiyai/" target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="LinkedIn" style={{width: "93px"}}/>
        </a>
        <a href="mailto:jgalvan89@gmail.com?subject=Vi%20tu%20web%20y%20me%20interesa%20tu%20perfil" target="_blank"rel="noreferrer">
          <img src={mail} alt="mail" style={{width: "93px"}}/>
        </a>
      </div>
    </div>
  );
}
