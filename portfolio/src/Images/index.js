// Project pictures
import locals from "./Locals.png";
import googlebook from "./GoogleBooks.png";
import clickygame from "./ClickyGame.png";
import tranquil from "./Tranquil.png";

// Home Page Background images
import home1 from "./home-background1.jpg";
import home2 from "./home-background2.jpg";
import home3 from "./home-background3.jpg";
import home4 from "./home-background4.jpg";

// About Page Background images
import about1 from "./about-background1.jpg";
import about2 from "./about-background2.jpg";
import about3 from "./about-background3.jpg";
import about4 from "./about-background4.jpg";

//Project Page Background Images
import project1 from "./project-background1.jpg";
import project2 from "./project-background2.jpg";
import project3 from "./project-background3.jpg";
import project4 from "./project-background4.jpg";

import profile from "./me.jpg";

// Projects Array with info about the projects
export const prjct = [
  {
    name: "Locals",
    image: locals,
    link: "https://fathomless-bastion-86766.herokuapp.com/"
  },
  {
    name: "Google Book Search",
    image: googlebook,
    link: "https://pure-harbor-50344.herokuapp.com"
  },
  {
    name: "Clicky Game",
    image: clickygame,
    link: "https://react-clicky-game-luc.herokuapp.com"
  },
  {
    name: "Tranquil",
    image: tranquil,
    link: "https://rugged-gunnison-25361.herokuapp.com/"
  }
];

// Array of images for Home page
export const home = [home1, home2, home3, home4];

// Array of images for About page
export const about = [about1, about2, about3, about4];

// Array of images for Project page
export const project = [project1, project2, project3, project4];

export const me = [profile];
