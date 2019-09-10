import React from "react";
import Card from "../Components/Card";
import { prjct, project } from "../Images";
import BackgroundSlideshow from "react-background-slideshow";

class Projects extends React.Component {
  render() {
    return (
      <div className="background">
        <BackgroundSlideshow images={project} />
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
      </div>
    );
  }
}

export default Projects;
