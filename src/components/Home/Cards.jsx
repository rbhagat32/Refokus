import React, { useRef } from "react";
import Card from "./Card";
import { useScroll } from "framer-motion";

const Cards = () => {
  const data = [
    {
      bgColor: "bg-[#5356ed]",
      logo: "/home/cards/logos/01.svg",
      topImage: "/home/cards/top-images/01.webp",
      bottomImage: "/home/cards/bottom-images/01.webp",
      video: "/home/cards/videos/01.webm",
      para: "Concept, Design, 3D, Webflow+WebGL Development",
      title:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      bgColor: "bg-[#4a576b]",
      logo: "/home/cards/logos/02.png",
      topImage: "/home/cards/top-images/02.png",
      bottomImage: "/home/cards/bottom-images/02.png",
      video: "/home/cards/videos/02.mp4",
      para: "Concept, Design, 3D, Webflow+WebGL Development",
      title:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      bgColor: "bg-[#1626f3]",
      logo: "/home/cards/logos/03.svg",
      topImage: "/home/cards/top-images/03.webp",
      bottomImage: "/home/cards/bottom-images/03.webp",
      video: "/home/cards/videos/03.mp4",
      para: "Concept, Design, Webflow Development",
      title:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      bgColor: "bg-[#3e4365]",
      logo: "/home/cards/logos/04.svg",
      topImage: "/home/cards/top-images/04.jpg",
      bottomImage: "/home/cards/bottom-images/04.jpg",
      video: "/home/cards/videos/04.webm",
      para: "Concept, Design, 3D, Webflow+WebGL Development, AI Integrations",
      title:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    // {
    //   bgColor: "bg-[#2dcb76]",
    //   logo: "/home/cards/logos/05.svg",
    //   topImage: "/home/cards/top-images/05.png",
    //   bottomImage: "/home/cards/bottom-images/05.png",
    //   video: "/home/cards/videos/05.mp4",
    //   para: "Branding, Design, Webflow+GSAP Development",
    //   title:
    //     "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    // },
    // {
    //   bgColor: "bg-[#ff7548]",
    //   logo: "/home/cards/logos/06.svg",
    //   topImage: "/home/cards/top-images/06.jpg",
    //   bottomImage: "/home/cards/bottom-images/06.jpg",
    //   video: "/home/cards/videos/06.webm",
    //   para: "Branding, Design, Webflow+GSAP Development",
    //   title:
    //     "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    // },
  ];

  const height = "h-[" + data.length * 100 + "vh]";

  const conatiner = useRef(null);
  const { scrollYProgress } = useScroll({
    target: conatiner,
    offest: ["start start", "end end"],
  });

  return (
    <div ref={conatiner} className={`w-full ${height} mt-32`}>
      {data.map((item, index) => {
        const targetScale = 1 - (data.length - index) * 0.1;
        return (
          <Card
            key={index}
            index={index}
            item={item}
            progress={scrollYProgress}
            range={[index * (1 / data.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Cards;
