import React from "react";
import Transition from "../Utils/Transition";
import Header from "../About/Header";
import Carousel from "../About/Carousel";
import Video from "../About/Video";

const About = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Carousel />
      <Video />
    </div>
  );
};

export default Transition(About);
