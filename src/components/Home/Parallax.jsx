import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Column from "./Column";
import { useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const images = [
    "/home/parallax/1.jpg",
    "/home/parallax/2.jpg",
    "/home/parallax/3.jpg",
    "/home/parallax/4.jpg",
    "/home/parallax/5.jpg",
    "/home/parallax/6.jpg",
    "/home/parallax/7.jpg",
    "/home/parallax/8.jpg",
    "/home/parallax/9.jpg",
    "/home/parallax/10.jpg",
    "/home/parallax/11.jpg",
    "/home/parallax/12.jpg",
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.5]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.25]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.75]
  );

  return (
    <div ref={container} className={styles.container}>
      <Column images={[images[0], images[1], images[2]]} translateY={y1} />
      <Column images={[images[3], images[4], images[5]]} translateY={y2} />
      <Column images={[images[6], images[7], images[8]]} translateY={y3} />
      <Column images={[images[9], images[10], images[11]]} translateY={y4} />
    </div>
  );
};

export default Parallax;
