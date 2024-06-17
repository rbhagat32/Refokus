import React from "react";
import Transition from "../Utils/Transition";
import Scene from "../Home/Scene";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Scene />
    </div>
  );
};

export default Transition(Home);
