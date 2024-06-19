import React from "react";
import Button from "../Utils/Button";
import { motion, useTransform } from "framer-motion";

const Card = ({ index, item, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 w-full h-screen flex justify-center items-center">
      <motion.div
        style={{ scale, top: `calc(-3% + ${index * 25}px)` }}
        className={`relative h-[90vh] w-[78vw] ${item.bgColor} p-6 rounded-2xl overflow-hidden flex gap-5`}
      >
        {/* Left */}
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="m-4 w-36">
            <img loading="lazy" src={item.logo} />
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="w-[18vw] rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={item.topImage}
              />
            </div>
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={item.bottomImage}
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 h-full flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden">
            <video
              preload="none"
              loading="lazy"
              className="w-full h-full object-cover"
              src={item.video}
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="m-6 flex flex-col gap-4">
            <p>{item.para}</p>
            <h2 className="text-[1.2vw] font-medium">{item.title}</h2>
            <Button buttonText="Visit Website" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
