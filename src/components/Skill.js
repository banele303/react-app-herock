import React from "react";
import Grid from "@material-ui/core/Grid";
import skill from "../images/img-8x.png";
import "./Skills.css";

const Skill = () => {
  return (
    <div>
      <div className="skill-head">
        <h1>MY SKILLS</h1>
      </div>
      <Grid container justify="center" spacing={2}>
        <Grid item xm={12} md={6}>
          <div className="skill-container">
            <h1>FRONT-END-SKILLS</h1>
            <h3> - React Js</h3>
            <h3> - HTML/CSS</h3>
            <h3> - Javascript/typescript</h3>
            <h3> - Material Ui </h3>
            <h3> - React Js</h3>
            <h3> - Redux</h3>
            <h3> - Next Js</h3>
          </div>
        </Grid>
        <Grid item xm={12} md={6}>
          <div className='skill-image'>
          <img src={skill} alt="" />
          </div>
        
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xm={12} md={6}>
        <div className='skill-image'>
          <img src={skill} alt="" />
          </div>
        </Grid>
        <Grid item xm={12} md={6}>
          <div className="skill-container">
            <h1>BACK-END-SKILLS</h1>
            <h3> - NodeJs/ExpressJs</h3>
            <h3> - MongoDB</h3>
            <h3> - MYSQL</h3>
            <h3> - GraphQL / Apollo </h3>
            <h3> - React Js</h3>
            <h3> - AWS - EC2, S3, Route 53</h3>
            <h3> - REST</h3>
          </div>
        </Grid>
      </Grid>
      <div className="skill-middle">
        <h3>
          Data Structures and Algorithms | Object Oriented Programming |
          Software Design and Architectures - SOLID, MVC, Microservices | Git |
          NPM and Yarn | C# Unity Engine
        </h3>
      </div>
      <div className="skill-para">
        <p>
          I can work on both the front-end and the back-end of any application.
          I am also experienced with building scalable projects, and managing
          large code bases. . currently I work on various different projects to
          build my skills and continue learning.
        </p>
      </div>
    </div>
  );
};

export default Skill;
