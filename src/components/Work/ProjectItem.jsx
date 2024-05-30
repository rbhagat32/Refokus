import React from "react";
import Button from "../Utils/Button";

const ProjectItem = ({ item, index, handleMouseHover }) => {
  return (
    <div
      onMouseEnter={() => handleMouseHover(index)}
      onMouseLeave={() => handleMouseHover(index)}
      style={{
        backgroundColor: item.hovered ? `${item.color}` : `var(--clr-dark)`,
      }}
      className={`group relative rounded-xl px-40 hover:px-28 py-16 hover:mb-8 transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h1 className="w-fit text-6xl font-medium whitespace-nowrap">
          {item.title}
        </h1>
        <div className="w-80 mr-8">
          <p className="mb-4 text-lg">{item.desc}</p>
          <Button buttonText="Live Website" />
        </div>
      </div>

      <div className="hidden group-hover:block rounded-xl overflow-hidden h-[375px] w-[500px] absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] transition-all duration-300 ease-in-out">
        <video autoPlay loop muted src={item.video}></video>
      </div>
    </div>
  );
};

export default ProjectItem;
