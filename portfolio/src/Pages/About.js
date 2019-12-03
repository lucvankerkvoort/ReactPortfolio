import React from "react";
import { about, icons } from "../Images";
import BackgroundSlideshow from "react-background-slideshow";

class About extends React.Component {
  render() {
    return (
      <div className="background-about">
        <BackgroundSlideshow images={about} />
        <div className="About">
          <div className="About-Text">
            <p className="p-text">
              I am Luc van Kerkvoor a Full Stack Webdeveloper.
              <br /> I was born in The Netherlands and lived most of my life in
              Amsterdam.
              <br />
              <br />
              I moved to California in November 2018.
              <br />
              I started a Bootcamp at UC Berkeley Extension for Full Stack
              Webdevelopment
              <br /> in March 2019 and graduated in August 2019.
              <br />I am looking for an opportunity as a front-end React
              developer.
              <br />
              <br />
              Hit me up if you have questions or just want to talk about code.
            </p>
          </div>
          <div className="skills-and-profile">
            <div className="profile-picture" />
            <div className="skillset">
            <h2>Skillset</h2>
              <ul>
                <li>
                  Javascript 
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  ExpressJS
                </li>
                <li>
                  ReactJS
                </li>
                <li>
                  NodeJS
                </li>
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
                <li>
                  MySQL
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
