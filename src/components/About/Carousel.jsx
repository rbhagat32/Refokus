import React, { useRef } from "react";
import Slider from "./Slider";
import { useScroll } from "framer-motion";

const Carousel = () => {
  const data = [
    {
      url: "/about/slider01.jpg",
      offset: "-40%",
      direction: "left",
    },
    {
      url: "/about/slider02.jpg",
      offset: "-75%",
      direction: "right",
    },
    {
      url: "/about/slider03.jpg",
      offset: "-20%",
      direction: "left",
    },
  ];

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={container} className="myGradient overflow-hidden mb-40">
      {data.map((item, index) => {
        return (
          <Slider
            key={index}
            url={item.url}
            scrollYProgress={scrollYProgress}
            offset={item.offset}
            direction={item.direction}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
