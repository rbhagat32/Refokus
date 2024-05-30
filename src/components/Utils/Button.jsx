import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ buttonText }) => {
  return (
    <div className="w-fit mt-2 flex items-center px-5 py-2 rounded-full bg-zinc-100 text-black text-sm font-semibold">
      {buttonText}
      <IoIosReturnRight className="inline-block mt-1 ml-2" />
    </div>
  );
};

export default Button;
