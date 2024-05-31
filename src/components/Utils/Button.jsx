import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ buttonText }) => {
  return (
    <button className="group/btn relative cursor-pointer overflow-hidden h-[42px] w-fit mt-2 flex flex-col items-center rounded-full bg-zinc-100 text-black font-bold">
      <div className="group-hover/btn:-translate-y-10 px-5 py-2 transition-all duration-300 ease-in-out">
        {buttonText}
        <IoIosReturnRight className="inline-block ml-2" />
      </div>

      <div className="group-hover/btn:-translate-y-10 px-5 py-2 transition-all duration-300 ease-in-out">
        {buttonText}
        <IoIosReturnRight className="inline-block ml-2" />
      </div>
    </button>
  );
};

export default Button;
