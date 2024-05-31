import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Utils/Routing";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Lenis
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  // Selection Disable
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    document.addEventListener("selectstart", (e) => {
      e.preventDefault();
    });
  });

  return (
    <div className="container mx-auto w-full overflow-hidden">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
