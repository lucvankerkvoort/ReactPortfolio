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
              I am Luc van Kerkvoort, a 29 year old Full Stack Webdeveloper.{" "}
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
              <ul>
                <li>
                  Javascript <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
                </li>
                <li>
                  MongoDB <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
                  <img src={icons[1]} alt="black-star" />
                </li>
                <li>
                  ExpressJS
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
                </li>
                <li>
                  ReactJS
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
                  <img src={icons[1]} alt="black-star" />
                </li>
                <li>
                  NodeJS
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
                </li>
                <li>
                  HTML
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                </li>
                <li>
                  CSS
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                </li>
                <li>
                  MySQL
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[0]} alt="yellow-star" />
                  <img src={icons[1]} alt="black-star" />
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
