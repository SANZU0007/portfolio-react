import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <br></br>
      <img
        src={project.image}
        alt="loading"
        style={{ maxWidth: "40%", height: "auto" }}
      />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <h5 className="a-tag">
        <a href={project.link}>1 click to deploy Link</a>
        

        <a href={project.link2}>2 click to Github Link</a>
      </h5>
    </div>
  );
}

export default ProjectDisplay;
