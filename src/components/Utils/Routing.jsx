import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import Culture from "../Pages/Culture";
import News from "../Pages/News";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/null" element={null} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default Routing;
