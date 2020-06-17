import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Luc van Kerkvoort</p>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <p>Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
