import React from "react";

const MarqueeItem = ({ src, num }) => {
  return (
    <div className="flex flex-1 items-center justify-between px-6 py-5 border border-zinc-600">
      <img src={src} />
      <p className="font-semibold text-lg">{num}</p>
    </div>
  );
};

export default MarqueeItem;
