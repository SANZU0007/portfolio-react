import React from "react";
import "../styles/Home.css";
import sanjay001 from "../assets/sanjay001.jpg";
import Projects from "../pages/Projects";

function Home() {
  const resumeURL =
    "https://drive.google.com/file/d/1chyrDO1fRl06obFWijJO_gzrgk0k-YnD/view?usp=drivesdk";

  const openEmailClient = () => {
    const subject = "Contact Request";
    const email = "sanjaykuttyags@gmail.com";

    const body = `
      Hi, I am Sanjay.
      I'd like to get in touch with you.
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="home">
      <div className="about">
        <img
          src={sanjay001}
          alt="Profile"
          className="profile-image"
          id="profile-image1"
        />
        <h3 className="sanjay developer">
          Hi, My Name is <b className="blinking-text">Sanjay</b>
        </h3>

        <div className="prompt">
          <h4 className="developer">
            A Full Stack web developer with a passion for <b>learning and creating.</b>
          </h4>
        </div>
      </div>
      <div className="skills">
        <h1 className="skills-heading">Skills</h1>
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
          <img
            className="skills-Logo1"
            src="https://img.icons8.com/?size=1x&id=74402&format=png"
          ></img>
       
        </div>
      </div>
      <Projects />
      <div className="contact-details">
        <h1 className="resume-style">Contact Me</h1>

        <button role="img" aria-label="Email" onClick={openEmailClient}>
          &#9993; Click to Send Email
        </button>
        
        <p>
          <button id="cv-1"> 
            <a href={resumeURL} target="_blank" rel="noopener noreferrer">
              Download Resume CV
            </a>
          </button>
        </p>
        
        <p id="call-1"> &#9742; +91 78680 52815</p>
      </div>
    </div>
  );
}

export default Home;
