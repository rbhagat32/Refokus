import React from "react";
import MarqueeItem from "./MarqueeItem";

const data = [
  { src: "/work/marquee01.svg", num: "52" },
  { src: "/work/marquee02.svg", num: "2" },
  { src: "/work/marquee03.svg", num: "15" },
  { src: "/work/marquee01.svg", num: "52" },
  { src: "/work/marquee02.svg", num: "2" },
  { src: "/work/marquee03.svg", num: "15" },
];

const Marquee = () => {
  return (
    <div className="mt-32 flex">
      {data.map((item, index) => {
        return <MarqueeItem key={index} src={item.src} num={item.num} />;
      })}
    </div>
  );
};

export default Marquee;
