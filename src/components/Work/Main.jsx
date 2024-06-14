import React, { useRef, useState } from "react";
import { useScroll } from "framer-motion";

const Main = () => {
  const data = [
    { src: "/work/work01.jpg", top: "60%", left: "50%", isActive: false },
    { src: "/work/work02.jpg", top: "68%", left: "48%", isActive: false },
    { src: "/work/work03.jpg", top: "69%", left: "55%", isActive: false },
    { src: "/work/work04.jpg", top: "72%", left: "45%", isActive: false },
    { src: "/work/work05.jpg", top: "75%", left: "53%", isActive: false },
    { src: "/work/work06.jpg", top: "80%", left: "50%", isActive: false },
  ];

  const [images, setImages] = useState(data);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["-50px start", "end start"],
  });

  scrollYProgress.on("change", (val) => {
    function showImages(arr) {
      setImages((prev) => {
        return prev.map((image, index) =>
          arr.indexOf(index) === -1
            ? { ...image, isActive: false }
            : { ...image, isActive: true }
        );
      });
    }

    if (val >= 0 && val <= 0.04) showImages([]);
    else if (val > 0.04 && val <= 0.1) showImages([0]);
    else if (val > 0.1 && val <= 0.2) showImages([0, 1]);
    else if (val > 0.2 && val <= 0.3) showImages([0, 1, 2]);
    else if (val > 0.3 && val <= 0.4) showImages([0, 1, 2, 3]);
    else if (val > 0.4 && val <= 0.5) showImages([0, 1, 2, 3, 4]);
    else if (val > 0.5 && val <= 0.6) showImages([0, 1, 2, 3, 4, 5]);
  });

  return (
    <div ref={container} className="relative w-full text-center">
      <h1 className="leading-none text-[36vw] font-medium">work</h1>
      <h2 className="text-zinc-600 text-xl">
        Web Design, Webflow Development, Creative Development
      </h2>
      <div className="absolute top-0 w-full h-full">
        {images.map(
          (image, index) =>
            image.isActive && (
              <img
                key={index}
                src={image.src}
                className="absolute w-64 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: image.top, left: image.left }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Main;
