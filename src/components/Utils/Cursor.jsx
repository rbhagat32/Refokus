import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - 20 / 2);
    mouse.y.set(clientY - 20 / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <motion.div
        id="cursor"
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          transition: { duration: 0.2 },
        }}
        className="fixed top-0 left-0 h-[20px] w-[20px] rounded-full bg-white z-10 mix-blend-difference pointer-events-none"
      />
    </>
  );
};

export default Cursor;
