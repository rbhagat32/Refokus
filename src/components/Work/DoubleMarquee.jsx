import React, { useState, useEffect } from "react";
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

  const [isUpperHovered, setIsUpperHovered] = useState(false);
  const [isLowerHovered, setIsLowerHovered] = useState(false);

  useEffect(() => {
    const upperMarqueeElements = document.querySelectorAll(".upper-marquee");
    upperMarqueeElements.forEach((marquee) => {
      marquee.style.animationPlayState = isUpperHovered ? "paused" : "running";
    });
  }, [isUpperHovered]);

  useEffect(() => {
    const lowerMarqueeElements = document.querySelectorAll(".lower-marquee");
    lowerMarqueeElements.forEach((marquee) => {
      marquee.style.animationPlayState = isLowerHovered ? "paused" : "running";
    });
  }, [isLowerHovered]);

  const handleUpperMouseEnter = () => setIsUpperHovered(true);
  const handleUpperMouseLeave = () => setIsUpperHovered(false);
  const handleLowerMouseEnter = () => setIsLowerHovered(true);
  const handleLowerMouseLeave = () => setIsLowerHovered(false);

  return (
    <div className="overflow-hidden container mx-auto mt-20">
      {/* Upper Marquee */}
      <div
        className="myGradient flex border border-zinc-600"
        onMouseEnter={handleUpperMouseEnter}
        onMouseLeave={handleUpperMouseLeave}
      >
        <motion.div
          className="upper-marquee flex flex-shrink-0"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {upper_images.map((src, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={src}
            />
          ))}
        </motion.div>
        <motion.div
          className="upper-marquee flex flex-shrink-0"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {upper_images.map((src, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={src}
            />
          ))}
        </motion.div>
      </div>

      {/* Lower Marquee */}
      <div
        className="myGradient flex border border-zinc-600"
        onMouseEnter={handleLowerMouseEnter}
        onMouseLeave={handleLowerMouseLeave}
      >
        <motion.div
          className="lower-marquee flex flex-shrink-0"
          style={{ animation: "reverse-marquee 50s linear infinite" }}
        >
          {lower_images.map((src, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={src}
            />
          ))}
        </motion.div>
        <motion.div
          className="lower-marquee flex flex-shrink-0"
          style={{ animation: "reverse-marquee 50s linear infinite" }}
        >
          {lower_images.map((src, index) => (
            <img
              loading="lazy"
              className="h-40 w-56 pr-20"
              key={index}
              src={src}
            />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes reverse-marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .upper-marquee {
          animation: marquee 50s linear infinite;
        }

        .lower-marquee {
          animation: reverse-marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DoubleMarquee;
