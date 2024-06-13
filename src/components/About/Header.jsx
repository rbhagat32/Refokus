import React from "react";
import Images from "./Images";

const Header = () => {
  return (
    <div className="relative h-[250vh] overflow-hidden mt-10">
      <div className="z-10 w-fit absolute mt-12 ml-20 leading-none text-[11.5vw] font-semibold">
        <h1>Forward</h1>
        <h1 className="flex items-center">
          <div className="h-4 w-40 bg-white mt-4 mr-8"></div> Thinking
        </h1>
      </div>
      <Images />
    </div>
  );
};

export default Header;
