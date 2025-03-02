import React from "react";
import Main from "../Work/Main";
import Marquee from "../Work/Marquee";
import Projects from "../Work/Projects";
import DoubleMarquee from "../Work/DoubleMarquee";
import Transition from "../Utils/Transition";

const Work = () => {
  return (
    <div className="container mx-auto">
      <Main />
      <Marquee />
      <Projects />
      <DoubleMarquee />
    </div>
  );
};

export default Transition(Work);
