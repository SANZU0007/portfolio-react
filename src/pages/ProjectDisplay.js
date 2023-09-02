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
        <h3 >Skills: </h3> {project.skills}
      </p>
      <h5 className="a-tag">
        <a href={project.link}> 1 click to project deploy <b>Link...</b></a>

        <a href={project.link2}> 2 click to frontend code Github <b>Link</b></a>
        <a href={project.link3} >3 click to Backend code  Github <b>Link</b></a>
      </h5>
    </div>
  );
}

export default ProjectDisplay;
