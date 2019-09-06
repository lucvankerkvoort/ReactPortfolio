import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { image, name, link } = this.props;
    const project = {
      display: "flex",
      boxShadow: `5px 5px 10px black`,
      color: "white",
      width: "100%",
      borderRadius: "25px",
      alignItems: "flex-end",
      justifyContent: "center",
      background: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div className="wrapper">
        <a href={link} target="_blank">
          <div className="project" style={project}>
            <p className="title-card">{name}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
