import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import About from "../Pages/About";
import News from "../Pages/News";
import { AnimatePresence } from "framer-motion";

const Routing = () => {
  const loc = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
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
