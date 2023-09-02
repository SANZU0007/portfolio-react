import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <br></br>
      <br></br>
      <h1>My Personal Projects</h1>

      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx} // Remember to add a unique key when mapping over components
              id={idx}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
