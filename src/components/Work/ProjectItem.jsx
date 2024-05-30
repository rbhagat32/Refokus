import React from "react";
import Button from "../Utils/Button";

const ProjectItem = ({ item }) => {
  return (
    <div
      style={{ backgroundColor: item.hovered ? `${item.color}` : `none` }}
      className={`group/main relative hover:bg-red-400 rounded-xl px-40 hover:px-28 py-16 hover:mb-8 transition-all duration-300 ease-in-out`}
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

      <div className="group/vid z-5 hidden group-hover/main:block rounded-xl overflow-hidden h-[375px] w-[500px] absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[50%] transition-all duration-300 ease-in-out">
        <div className="group-hover/vid:hidden flex flex-col justify-center items-center shadow-xl w-32 h-32 rounded-full bg-white text-black absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] transition-all duration-300 ease-in-out">
          <h1 className="white-space-nowrap text-lg font-black">Hover Me</h1>
          <h1 className="white-space-nowrap text-lg font-black">To Play !</h1>
        </div>
        <video
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          src={item.video}
        ></video>
      </div>
    </div>
  );
};

export default ProjectItem;
