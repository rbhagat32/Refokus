import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const data = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      video: "/work/videos/01arqitel.webm",
      color: "#5356ed",
      hovered: false,
    },
    {
      title: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      video: "/work/videos/02cula.mp4",
      color: "#4a576b",
      hovered: false,
    },
    {
      title: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      video: "/work/videos/03layoutland.mp4",
      color: "#1626f3",
      hovered: false,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      video: "/work/videos/04ttr.webm",
      color: "#3e4365",
      hovered: false,
    },
    {
      title: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      video: "/work/videos/05maniv.mp4",
      color: "#2dcb76",
      hovered: false,
    },
    {
      title: "Singularity",
      desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      video: "/work/videos/06singularity.webm",
      color: "#4c20cf",
      hovered: false,
    },
    {
      title: "Like Magic",
      desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      video: "/work/videos/07likemagic.webm",
      color: "#4730c6",
      hovered: false,
    },
    {
      title: "Silvr",
      desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      video: "/work/videos/08silvr.webm",
      color: "#ff7548",
      hovered: false,
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      video: "/work/videos/09rainfall.webm",
      color: "#4149f1",
      hovered: false,
    },
    {
      title: "Intenseye",
      desc: "A brand new website for Intenseye just before their $64M Series.",
      video: "/work/videos/10intenseye.webm",
      color: "#ff501a",
      hovered: false,
    },
    {
      title: "Remind",
      desc: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      video: "/work/videos/11remind.webm",
      color: "#3d77e9",
      hovered: false,
    },
    {
      title: "Summon",
      desc: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      video: "/work/videos/12summon.webm",
      color: "#426a78",
      hovered: false,
    },
    {
      title: "Jungle",
      desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      video: "/work/videos/13jungle.webm",
      color: "#5858ec",
      hovered: false,
    },
    {
      title: "Candid Health",
      desc: "A complete redesign of a health-startup website, followed by cutting edge development.",
      video: "/work/videos/14candidhealth.webm",
      color: "#695cf2",
      hovered: false,
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      video: "/work/videos/15yahoo.webm",
      color: "#24014f",
      hovered: false,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      video: "/work/videos/16yir2022.webm",
      color: "#5d4eff",
      hovered: false,
    },
    {
      title: "YIR 2021",
      desc: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      video: "/work/videos/17yir2021.webm",
      color: "#382865",
      hovered: false,
    },
    {
      title: "Showcase",
      desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      video: "/work/videos/18showcase.mp4",
      color: "#fe9f2e",
      hovered: false,
    },
    {
      title: "Weglot",
      desc: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      video: "/work/videos/19weglot.webm",
      color: "#24412f",
      hovered: false,
    },
    {
      title: "RocketChat",
      desc: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      video: "/work/videos/20rocketchat.webm",
      color: "#ff4747",
      hovered: false,
    },
  ];

  return (
    <div className="container mx-auto w-full mt-40">
      {data.map((item, index) => {
        return <ProjectItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Projects;
