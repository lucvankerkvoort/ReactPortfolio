import React from "react";

const Jumbotron = ({ title, subtext }) => {
  return (
    <div className="jumbotron">
      <h2>{title}</h2>
      <p>{subtext}</p>
    </div>
  );
};

export default Jumbotron;
