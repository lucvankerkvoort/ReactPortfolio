import React from "react";
import Jumbotron from "../Components/Jumbotron";
import BackgroundSlideshow from "react-background-slideshow";
import { home } from "../Images";
class Home extends React.Component {
  render() {
    return (
      <div className="background">
        <BackgroundSlideshow images={home} />
        <div className="Home">
          <Jumbotron />
        </div>
      </div>
    );
  }
}

export default Home;
