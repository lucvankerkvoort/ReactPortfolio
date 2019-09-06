import React from "react";
import Card from "../Components/Card";
import { prjct } from "../Images";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        {prjct.map(project => (
          <div className="row">
            <Card
              name={project.name}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
