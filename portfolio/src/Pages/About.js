import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="text">
        <h2>About</h2>
        <p>
          Hi, I’m Luc. I’m a Front-end Engineer with a background in Hotel and
          Event management.
          <br />
          <br />
          Before finding my passion for software development, I worked in the
          field of event management for several years where I helped plan for
          events with as many as 2000 to 2 million attendees. This experience
          allowed me to hone my organizational and communication skills as well
          as develop an eye for detail and oversight.
          <br />
          <br /> I’m proficient in JavaScript, HTML, CSS and specialize in
          building Front end applications with React, Redux and Context API. I
          can create stunning web pages using SASS and front-end frameworks like
          Bootstrap, Material UI and flexbox.
          <br />
          <br />I am constantly improving my skill set and am willing to learn
          more about the Front-end landscape. I adapt to new technologies
          quickly and I would love to dive deeper into other front-end
          frameworks like Angular or Vue.
          <br />
          <br />I am a team player and leave my ego at the door. Working in a
          team means working towards a collective goal and that is something I
          feel very strongly about.
          <br />
          <br /> over 5 years of experience I have great understanding of
          Computer Science fundamentels as well as creating full-stack
          applications
        </p>
      </div>
      <div>
        <div className="picture">
          <div className="me" />
        </div>
        <div className="skillset">
          <div className="skillset_card">
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Context API</li>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>MongoDB</li>
              <li>Webpack</li>
              <li>Babel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
