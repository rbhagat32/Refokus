import React from "react";
import Transition from "../Utils/Transition";
import DoubleMarquee from "../Work/DoubleMarquee";
import Cards from "../Home/Cards";
import Parallax from "../Home/Parallax";

const Home = () => {
  return (
    <div className="container mx-auto">
      <DoubleMarquee />
      <Cards />
      <Parallax />
    </div>
  );
};

export default Transition(Home);
