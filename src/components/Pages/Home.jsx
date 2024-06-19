import React from "react";
import Transition from "../Utils/Transition";
import DoubleMarquee from "../Work/DoubleMarquee";

const Home = () => {
  return (
    <div className="container mx-auto">
      <DoubleMarquee />
    </div>
  );
};

export default Transition(Home);
