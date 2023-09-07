import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import sanjay001 from "../assets/sanjay001.jpg";
import Projects from "../pages/Projects";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img
          src={sanjay001}
          alt="Profile"
          className="profile-image"
          id="profile-image1"
        />
        <h3 className="sanjay">
          Hi, My Name is <b className="blinking-text">sanjay</b>
        </h3>

        <div className="prompt">
          <h4 className="developer">
            A Full Stack web developer with a passion for{" "}
            <b> learning and creating.</b>
          </h4>
          <div id="iconesss">
            <a
              href="https://www.linkedin.com/in/sanjay-m-sanjay-89688825a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/sanjay_1119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/SANZU0007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 className="skills">Skills</h1>

        <div className="skills-Logo">
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=20909&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=21278&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=PXTY4q2Sq2lG&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=hsPbhkOH4FMe&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            id="skills-Logo2"
            src="https://img.icons8.com/?size=1x&id=123603&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=gFw7X5Tbl3ss&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=jD-fJzVguBmw&format=png"
            alt="no image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=kg46nzoJrmTR&format=png"
            alt="no-image"
          ></img>
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=20906&format=png"
            alt="no"
          ></img>
          <img className="skills-Logo1" src="https://img.icons8.com/?size=1x&id=74402&format=png"></img>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
