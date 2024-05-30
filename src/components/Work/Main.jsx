import React from "react";

const Main = () => {
  const images = [
    { src: "/work/work01.png", top: "50%", left: "50%", isActive: true },
    { src: "/work/work02.png", top: "55%", left: "48%", isActive: false },
    { src: "/work/work03.png", top: "53%", left: "55%", isActive: false },
    { src: "/work/work04.png", top: "48%", left: "51%", isActive: false },
    { src: "/work/work05.png", top: "58%", left: "49%", isActive: false },
    { src: "/work/work06.png", top: "60%", left: "53%", isActive: false },
  ];

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
