import React, { useRef } from "react";
import Image from "./Image";
import Card from "./Card";
import { useScroll, useTransform } from "framer-motion";

const Images = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const translateLeftHigh = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const translateRightHigh = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateLeftMid = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateRightMid = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const translateLeftLow = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateRightLow = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateUp = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateDown = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={container} className="relative h-[250vh] overflow-hidden">
      <Image
        height={"h-[200px]"}
        width={"w-[300px]"}
        x={"left-[28%]"}
        y={"-top-[6%]"}
        url={"/about/about01.png"}
        moveX={translateLeftHigh}
      />
      <Image
        height={"h-[200px]"}
        width={"w-[200px]"}
        x={"right-[14%]"}
        y={"-top-[4%]"}
        url={"/about/about02.png"}
        moveX={translateRightHigh}
      />
      <Image
        height={"h-[200px]"}
        width={"w-[200px]"}
        x={"right-[28%]"}
        y={"top-[5%]"}
        url={"/about/about03.png"}
        moveX={translateLeftLow}
      />
      <Image
        height={"h-[160px]"}
        width={"w-[160px]"}
        x={"left-[10%]"}
        y={"top-[23%]"}
        url={"/about/about04.png"}
        moveX={translateLeftMid}
      />
      <Image
        height={"h-[140px]"}
        width={"w-[140px]"}
        x={"left-[33%]"}
        y={"top-[22%]"}
        url={"/about/about05.png"}
        moveY={translateDown}
      />
      <Image
        height={"h-[175px]"}
        width={"w-[260px]"}
        x={"right-[5%]"}
        y={"top-[18%]"}
        url={"/about/about06.png"}
        moveX={translateRightMid}
      />
      <Image
        height={"h-[240px]"}
        width={"w-[230px]"}
        x={"right-[30%]"}
        y={"top-[30%]"}
        url={"/about/about07.png"}
        moveX={translateLeftLow}
      />
      <Card
        title={"Our People"}
        num={"25+"}
        para={
          "We are a world-class team of experts working remotely across different time zones, mostly in Germany, the UK, Argentina, and the US East Coast—the world's leading hubs for creative talent."
        }
        x={"left-[5%]"}
        y={"top-[40%]"}
      />
      <Image
        height={"h-[230px]"}
        width={"w-[180px]"}
        x={"left-[40%]"}
        y={"top-[48%]"}
        url={"/about/about08.png"}
        moveX={translateRightMid}
      />
      <Card
        title={"Our Awards"}
        num={"77"}
        para={
          "We are results-driven and people-focused (but awards are nice too!). We've won website of the day from multiple awards organizations and have been nominated twice for Webflow Agency of the year."
        }
        x={"right-[7%]"}
        y={"top-[48%]"}
      />
      <Image
        height={"h-[200px]"}
        width={"w-[180px]"}
        x={"left-[55%]"}
        y={"top-[65%]"}
        url={"/about/about09.png"}
        moveX={translateLeftMid}
      />
      <Image
        height={"h-[190px]"}
        width={"w-[220px]"}
        x={"left-[10%]"}
        y={"top-[70%]"}
        url={"/about/about10.png"}
        moveY={translateUp}
      />
      <Card
        title={"Our History"}
        num={"2021"}
        para={
          "We are proud of our short history, positioning ourselves as market leaders and demonstrating that great work fuels growth."
        }
        x={"left-[20%]"}
        y={"top-[72%]"}
      />
      <Image
        height={"h-[220px]"}
        width={"w-[280px]"}
        x={"right-[20%]"}
        y={"top-[80%]"}
        url={"/about/about11.png"}
        moveX={translateRightMid}
      />
    </div>
  );
};

export default Images;
