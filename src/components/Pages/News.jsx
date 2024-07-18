import React, { useState } from "react";
import Transition from "../Utils/Transition";
import Header from "../News/Header";
import Articles from "../News/Articles";
import Search from "../News/Search";

const News = () => {
  const [filter, setFilter] = useState("All");

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <Search handleFilter={handleFilter} />
      <Articles filter={filter} />
    </div>
  );
};

export default Transition(News);
