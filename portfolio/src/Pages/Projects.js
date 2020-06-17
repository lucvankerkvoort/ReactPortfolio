import React from "react";
import Project_Card from "../components/project_card";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_main">
          {(listOfProjects || []).map(element => {
              <Project_Card name={element.name} />
          })}
      </div>
    </div>
  );
};

const listOfProjects = [
    {
        name: "CodeBase",
        role: "Front-end Developer",
        web: "",
        code: 
    }
]

export default Projects;
