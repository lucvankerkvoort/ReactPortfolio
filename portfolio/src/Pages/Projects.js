import React from "react";
import Card from "../Components/Card";
import { prjct } from "../Images";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <div className="row">
          <Card
            name={prjct.Locals.name}
            image={prjct.Locals.image}
            link={prjct.Locals.link}
          />
        </div>
        <div className="row">
          <Card
            name={prjct.GoogleBooks.name}
            image={prjct.GoogleBooks.image}
            link={prjct.GoogleBooks.link}
          />
        </div>
        <div className="row">
          <Card />
        </div>
        <div className="row">
          <Card />
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    );
  }
}

export default Projects;
