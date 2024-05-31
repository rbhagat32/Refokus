import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Utils/Button";

const CardItem = ({ item }) => {
  return (
    <div
      className={`group flex flex-col justify-between rounded-xl bg-[#323238] ${item.width} ${item.bgColor} h-[460px] p-7 transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-6 group-hover:px-2 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <p>{item.para}</p>
          <FaArrowRightLong />
        </div>
        <h2 className="max-w-[14ch] text-3xl font-medium">{item.subtitle}</h2>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-semibold">{item.title}</h1>
        {item.button ? (
          <Button buttonText="Contact Us" altText="Show More" bgColor="" />
        ) : (
          <p className="">{item.footer}</p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
