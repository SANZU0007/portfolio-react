import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import  TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import sanjay from "../assets/sanjay.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
     
        <img
          src={sanjay}
          alt="Profile"
          className="profile-image"
        />
        <h2 className="sanjay"> Hi, My Name is sanjay</h2>

        <div className="prompt">
          <p>A Full Stack web developer with a passion for learning and creating.</p>
          <div className="icons">

          <a href="https://www.linkedin.com/in/sanjay-m-sanjay-89688825a/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/sanjay_1119" target="_blank" rel="noopener noreferrer">
        <TwitterIcon/>
</a>


        <a href="https://github.com/SANZU0007" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        </div>

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
              Ionic, BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, DynamoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
