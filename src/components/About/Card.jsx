import React from "react";

const Card = ({ title, num, para, x, y }) => {
  return (
    <div
      className={`glass absolute ${x} ${y} w-[450px] z-10 bg-white rounded-lg flex flex-col gap-8 p-8`}
    >
      <h2 className="text-3xl font-medium">{title}</h2>
      <h1 className="text-9xl font-semibold">{num}</h1>
      <p className="text-xl">{para}</p>
    </div>
  );
};

export default Card;
