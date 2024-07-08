import React from "react";
import { motion } from "framer-motion";

const Transition = (Component) => {
  Component.routeName = Component.name || "Refokus";
  console.log(Component.routeName);

  return () => (
    <>
      <Component />

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] origin-top p-24"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 2 }}
      >
        <div className="flex justify-center items-center w-full h-full border-y border-zinc-700">
          <h1 className="relative p-6 text-8xl font-bold flex items-end gap-2">
            {Component.routeName === "Home"
              ? "Refokus."
              : `${Component.routeName}.`}

            <motion.span
              animate={{
                backgroundColor: "rgb(34 197 94)",
                boxShadow:
                  "2px 2px 20px 0px rgb(34 197 94), 2px -2px 20px 0px rgb(34 197 94), -2px 2px 20px 0px rgb(34 197 94), -2px -2px 20px 0px rgb(34 197 94), 2px 2px 60px 0px rgb(34 197 94), 2px -2px 60px 0px rgb(34 197 94), -2px 2px 60px 0px rgb(34 197 94), -2px -2px 60px 0px rgb(34 197 94)",
              }}
              transition={{ delay: 1, duration: 0 }}
              className="absolute top-0 right-0 h-5 w-5 rounded-full"
            />
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default Transition;
