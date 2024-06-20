import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Video = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const vid_width = useTransform(scrollYProgress, [0, 1], ["22vw", "66vw"]);
  const vid_scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.3]);
  const vid_opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const img_opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={container} className="h-[490vh]">
      <div className="sticky top-0 h-[100vh] flex justify-center items-center">
        <div className="h-[75vh] flex gap-10 justify-center items-center">
          <motion.img
            style={{ opacity: img_opacity }}
            className="z-[-1] w-[8vw] object-cover rounded-3xl"
            src="/about/video/04.webp"
          />
          <motion.img
            style={{ opacity: img_opacity }}
            className="z-[-1] w-[15vw] object-cover rounded-3xl"
            src="/about/video/02.webp"
          />
          <motion.video
            style={{
              width: vid_width,
              scaleX: vid_scale,
              opacity: vid_opacity,
            }}
            className="z-[20] h-full object-cover rounded-3xl"
            src="/about/video/about.webm"
            autoPlay
            muted
            loop
          ></motion.video>
          <motion.img
            style={{ opacity: img_opacity }}
            className="z-[-1] w-[15vw] object-cover rounded-3xl"
            src="/about/video/03.webp"
          />
          <motion.img
            style={{ opacity: img_opacity }}
            className="z-[-1] w-[8vw] object-cover rounded-3xl"
            src="/about/video/01.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
