import React from "react";
import { about, me } from "../Images";
import BackgroundSlideshow from "react-background-slideshow";

class About extends React.Component {
  render() {
    return (
      <div className="background">
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
        </div>
      </div>
    );
  }
}

export default About;
