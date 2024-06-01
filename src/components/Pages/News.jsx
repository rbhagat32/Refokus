import React from "react";
import Transition from "../Utils/Transition";
import Header from "../News/Header";
import Articles from "../News/Articles";
import Search from "../News/Search";

const News = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Search />
      <Articles />
    </div>
  );
};

export default Transition(News);
