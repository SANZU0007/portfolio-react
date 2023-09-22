import React, { useEffect, useState } from "react";
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

  // Typewriter effect code for the developer text
  const [typedText, setTypedText] = useState("");
  const text =
    "A Full Stack web developer with a passion for learning and creating.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (milliseconds)

    // Clear the interval after typing the entire text once
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

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

        <div className="full">
          <div className="developer">{typedText}</div>
        </div>
      </div>
      <div className="skills">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-logos">
          {/* Your skills logos */}
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
