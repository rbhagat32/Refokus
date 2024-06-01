import { motion } from "framer-motion";
import React from "react";

const Transition = (Component) => {
  return () => (
    <>
      <Component />

      <motion.div
        className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-black z-40 origin-top"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 2 }}
      >
        <h1 className="z-50 text-8xl font-bold">
          Refokus
          <motion.span
            animate={{ color: "rgb(34 197 94)" }}
            transition={{ delay: 1, duration: 0 }}
          >
            .
          </motion.span>
        </h1>
      </motion.div>
    </>
  );
};

export default Transition;
