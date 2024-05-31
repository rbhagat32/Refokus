import React from "react";
import CardItem from "./CardItem";

const Cards = () => {
  const data = [
    {
      width: "basis-1/3",
      para: "Up Next: News",
      subtitle: "Insights and behind the scenes.",
      title: "",
      button: false,
      footer: "Explore what drives our team",
      bgColor: "",
    },
    {
      width: "basis-2/3",
      para: "Get in Touch",
      subtitle: "Let's get to it, Together.",
      title: "Start a Project",
      button: true,
      footer: "",
      bgColor: "hover:bg-violet-600",
    },
  ];

  return (
    <div className="flex gap-1 px-24">
      {data.map((item, index) => {
        return <CardItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Cards;
