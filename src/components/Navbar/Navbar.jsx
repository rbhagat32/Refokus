import React, { useState } from "react";
import Button from "../Utils/Button";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navData = [
    { text: "Home", route: "/" },
    { text: "Work", route: "/work" },
    { text: "About", route: "/about" },
    { text: "", route: "/null" },
    { text: "News", route: "/news" },
  ];

  return (
    <div className="relative z-10 container mx-auto px-8 max-w-screen-xl mt-4 flex lg:gap-28 xl:gap-40 justify-between items-center pb-4 border-b-2 border-zinc-700">
      <img className="h-8" src="Navbar Logo.svg" />

      <div className="hidden w-full lg:flex justify-between items-center">
        <div className="flex gap-8">
          {navData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.route}
                className={(e) => {
                  return [
                    "hover:translate-x-1 mt-2 flex items-center gap-1 font-medium hover:text-zinc-300 transition-all duration-300 ease-in-out",
                    e.isActive &&
                      "text-zinc-300 before:bg-green-500 before:h-1 before:w-1 before:absolute before:-left-[8px] before:rounded-full",
                  ].join(" ");
                }}
              >
                {index !== 3 ? (
                  item.text
                ) : (
                  <div className="w-[2px] h-3/4 rounded-full bg-zinc-700"></div>
                )}
              </NavLink>
            );
          })}
        </div>
        <Button buttonText="Start a Project" />
      </div>

      <div className="block lg:hidden">
        <button>
          <FaBars className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
