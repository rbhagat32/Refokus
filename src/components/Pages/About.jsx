import React from "react";
import Transition from "../Utils/Transition";
import Header from "../About/Header";
import Carousel from "../About/Carousel";

const About = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Carousel />
    </div>
  );
};

export default Transition(About);
