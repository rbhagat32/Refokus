import React from "react";
import { motion } from "framer-motion";

const Image = ({ height, width, x, y, url, moveX = 0, moveY = 0 }) => {
  return (
    <motion.div
      style={{ translateX: moveX, translateY: moveY }}
      className={`absolute ${x} ${y} ${height} ${width} overflow-hidden`}
    >
      <img loading="eager" src={url} className="h-full w-full rounded-lg" />
    </motion.div>
  );
};

export default Image;
