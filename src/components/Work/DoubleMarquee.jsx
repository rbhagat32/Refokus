import React from "react";
import { motion } from "framer-motion";

const DoubleMarquee = () => {
  const upper_images = [
    "/work/double-marquee/01.svg",
    "/work/double-marquee/02.svg",
    "/work/double-marquee/03.svg",
    "/work/double-marquee/04.svg",
    "/work/double-marquee/05.svg",
    "/work/double-marquee/06.svg",
    "/work/double-marquee/07.svg",
    "/work/double-marquee/08.svg",
    "/work/double-marquee/09.svg",
    "/work/double-marquee/10.svg",
    "/work/double-marquee/11.svg",
  ];

  const lower_images = [
    "/work/double-marquee/12.svg",
    "/work/double-marquee/13.svg",
    "/work/double-marquee/14.svg",
    "/work/double-marquee/15.svg",
    "/work/double-marquee/16.svg",
    "/work/double-marquee/17.svg",
    "/work/double-marquee/18.svg",
    "/work/double-marquee/19.svg",
    "/work/double-marquee/20.svg",
    "/work/double-marquee/21.svg",
    "/work/double-marquee/22.svg",
  ];

  return (
    <div className="overflow-hidden container mx-auto mt-32">
      {/* Upper Marquee */}
      <div className="myGradient flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upper_images.map((_, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={upper_images[index]}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upper_images.map((_, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={upper_images[index]}
            />
          ))}
        </motion.div>
      </div>

      {/* Lower Marquee */}
      <div className="myGradient flex">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {lower_images.map((_, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={lower_images[index]}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {lower_images.map((_, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={lower_images[index]}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DoubleMarquee;
