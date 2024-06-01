import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import About from "../Pages/About";
import News from "../Pages/News";
import { AnimatePresence } from "framer-motion";

const Routing = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/null" element={null} />
        <Route path="/news" element={<News />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
