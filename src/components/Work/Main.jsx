import { useScroll } from "framer-motion";
import React, { useState } from "react";

const Main = () => {
  const data = [
    { src: "/work/work01.png", top: "60%", left: "50%", isActive: false },
    { src: "/work/work02.png", top: "68%", left: "48%", isActive: false },
    { src: "/work/work03.png", top: "69%", left: "55%", isActive: false },
    { src: "/work/work04.png", top: "72%", left: "45%", isActive: false },
    { src: "/work/work05.png", top: "75%", left: "53%", isActive: false },
    { src: "/work/work06.png", top: "80%", left: "50%", isActive: false },
  ];

  const [images, setImages] = useState(data);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setImages((prev) => {
        return prev.map((image, index) =>
          arr.indexOf(index) === -1
            ? { ...image, isActive: false }
            : { ...image, isActive: true }
        );
      });
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;

      case 1:
        showImages([0]);
        break;

      case 2:
        showImages([0, 1]);
        break;

      case 3:
        showImages([0, 1, 2]);
        break;

      case 4:
        showImages([0, 1, 2, 3]);
        break;

      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;

      case 6:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="relative w-full text-center">
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
