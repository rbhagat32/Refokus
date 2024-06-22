import React from "react";
import Transition from "../Utils/Transition";
import Emoji from "../Home/Emoji";
import DoubleMarquee from "../Work/DoubleMarquee";
import Cards from "../Home/Cards";
import Parallax from "../Home/Parallax";
import SwiperJs from "../Home/SwiperJs";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Emoji />
      <DoubleMarquee />
      <Cards />
      <Parallax />
      <SwiperJs />
    </div>
  );
};

export default Transition(Home);
