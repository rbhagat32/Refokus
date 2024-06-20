import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwiperJs = () => {
  const data = [
    {
      url: "/home/swiper/01.png",
      para: "Working with Refokus is an absolute pleasure. They are artists of their craft, work with passion and patience to understand the objective and reach it in an ultimate way! They are a team of professionals who are always ready to go the extra mile to deliver the best results. I would highly recommend Refokus to anyone who is looking for a creative and professional team to work with.",
      name: "Ron Rofe",
    },
    {
      url: "/home/swiper/02.jpg",
      para: "Our collaboration with Refokus was incredibly effective. They have an insightful, senior team spanning many functions and they created a striking, articulate landing page for our AI startup that I'm extremely satisfied with. I showed some of the early design explorations to a friend who works on Apple's Interaction Design team and he remarked that the creative range was unusual to see from a single agency.",
      name: "Mike Conover",
    },
    {
      url: "/home/swiper/03.jpg",
      para: "Refokus was efficient and proactive in achieving quality results. The final output was well made and created a huge impact with regards to brand awareness for our brand. The experience also managed to bag several awards and was mentioned during the keynote of Webflow Conf. Refokus' response timing was always on point as well.",
      name: "Eugene Ernoult",
    },
    {
      url: "/home/swiper/04.jpg",
      para: "We had a wonderful experience working with Refokus for our recent website redesign. We were grateful for their partnership, guidance, patience, and expertise. They're masters of their craft, they helped us evolve our brand and level up our website, and we're incredibly proud of where we netted out.",
      name: "Katie Kearsey",
    },
  ];

  return (
    <div className="relative mx-[12vw] my-40 flex justify-center items-center">
      <Swiper
        loop={true}
        centeredSlides={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full">
              <div className="max-w-[50vw] my-12 mx-auto flex justify-center items-center gap-10">
                <div className="flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={item.url}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="max-w-[60ch]">{item.para}</p>
                  <h2 className="font-medium">{item.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperJs;
