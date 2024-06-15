import React from "react";
import { motion, useTransform } from "framer-motion";

const Slider = ({ url, scrollYProgress, offset, direction }) => {
  const dir = direction === "left" ? -1 : 1;
  const move = useTransform(scrollYProgress, [0, 1], [-150 * dir, 150 * dir]);

  return (
    <motion.div style={{ left: offset, x: move }} className="relative flex">
      <div className="flex items-center gap-6 whitespace-nowrap pr-6">
        <h1 className="text-[6vw] font-bold">Design Driven Tech</h1>
        <span className="relative h-[6vw] aspect-[4/2] rounded-full overflow-hidden">
          <img loading="lazy" src={url} className="relative" />
        </span>
      </div>
      <div className="flex items-center gap-6 whitespace-nowrap pr-6">
        <h1 className="text-[6vw] font-bold">Design Driven Tech</h1>
        <span className="relative h-[6vw] aspect-[4/2] rounded-full overflow-hidden">
          <img loading="lazy" src={url} className="relative" />
        </span>
      </div>
      <div className="flex items-center gap-6 whitespace-nowrap pr-6">
        <h1 className="text-[6vw] font-bold">Design Driven Tech</h1>
        <span className="relative h-[6vw] aspect-[4/2] rounded-full overflow-hidden">
          <img loading="lazy" src={url} className="relative" />
        </span>
      </div>
    </motion.div>
  );
};

export default Slider;
