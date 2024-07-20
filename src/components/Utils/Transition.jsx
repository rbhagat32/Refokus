import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Utility function to capitalize the first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Transition = (Component) => {
  const EnhancedComponent = (props) => {
    const { location } = props;

    let routeName =
      location.pathname === "/" ? "Refokus" : location.pathname.substring(1);

    routeName = capitalizeFirstLetter(routeName);

    return (
      <>
        <Component {...props} />

        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] origin-top p-24"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%", transition: { delay: 0 } }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        >
          <div className="flex justify-center items-center w-full h-full border-y border-zinc-700">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              className="relative p-6 text-8xl font-bold flex items-end gap-2"
            >
              {routeName === "Home" ? "Refokus." : `${routeName}.`}
              <span
                style={{
                  backgroundColor: "rgb(34 197 94)",
                  boxShadow:
                    "2px 2px 20px 0px rgb(34 197 94), 2px -2px 20px 0px rgb(34 197 94), -2px 2px 20px 0px rgb(34 197 94), -2px -2px 20px 0px rgb(34 197 94), 2px 2px 60px 0px rgb(34 197 94), 2px -2px 60px 0px rgb(34 197 94), -2px 2px 60px 0px rgb(34 197 94), -2px -2px 60px 0px rgb(34 197 94)",
                }}
                className="absolute top-0 right-0 h-5 w-5 rounded-full"
              />
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] origin-bottom p-24"
          initial={{ y: "-100%" }}
          animate={{ y: "-100%" }}
          exit={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center items-center w-full h-full border-y border-zinc-700">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              className="relative p-6 text-8xl font-bold flex items-end gap-2"
            >
              {`${routeName}.`}
            </motion.h1>
          </div>
        </motion.div>
      </>
    );
  };

  const withRouter = (Component) => {
    return (props) => {
      const location = useLocation();
      return <Component {...props} location={location} />;
    };
  };

  return withRouter(EnhancedComponent);
};

export default Transition;
