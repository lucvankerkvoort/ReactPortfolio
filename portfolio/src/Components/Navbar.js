import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const style = {
      textDecoration: "none",
      color: "black"
    };
    return (
      <div className="Navbar-Container">
        <div className="Navbar">
          <Link to="/" style={style}>
            <h3>Home</h3>
          </Link>
          <Link to="/about" style={style}>
            <h3>About</h3>
          </Link>
          <Link to="/projects" style={style}>
            <h3>Projects</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
