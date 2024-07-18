import React from "react";
import { motion } from "framer-motion";
import Button from "../Utils/Button";

const Articles = ({ filter, search }) => {
  const data = [
    {
      title:
        "The Strategic Importance of a Cool Website for Venture Capital Firms",
      type: "Article",
    },
    {
      title:
        "Why Refokus is the Best Partner to Build Your Venture Capital Website",
      type: "News",
    },
    {
      title:
        "The Future of Web Design: Webflow's Unmatched Advantage Over WordPress",
      type: "Article",
    },
    {
      title: "Spotlight on Innovation: Webflow's Case Study of Refokus",
      type: "Resource",
    },
    {
      title:
        "Elevating Web Development: How Refokus Harnesses Webflow and Emerging Technologies",
      type: "Resource",
    },
    {
      title:
        "Elevating Your Brand: Why a Custom Webflow Website is a Game-Changer for Startups",
      type: "Article",
    },
    {
      title:
        "Maximizing SEO on Webflow: How Webflow Empowers Your Site's Search Performance",
      type: "News",
    },
    {
      title: "Refokus at Webflow Conf 2023: A Fusion of Design and Technology",
      type: "Resource",
    },
    {
      title:
        "Refokus and the Future of AI in Web Design: A Spotlight on Webflow's Blog Feature",
      type: "Article",
    },
    {
      title: "Onboarding your team to harness the power of AI",
      type: "News",
    },
  ];

  const filteredData = data.filter((item) => {
    const matchFilter = filter === "All" ? item : item.type === filter;

    const matchSearch =
      search === "" ? item : item.title.toLowerCase().includes(search);

    return matchFilter && matchSearch;
  });

  return (
    <>
      <div className="mx-28 mb-20">
        {filteredData.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="group flex gap-24 items-center py-6 border-b border-zinc-700 hover:border-[#fff] transition-all duration-300 ease-in-out"
            >
              <p className="group-hover:text-zinc-300 text-zinc-500 min-w-[80px]">
                {item.type}
              </p>
              <h2 className="text-2xl font-medium">{item.title}</h2>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Button buttonText="View More" altText="Show More" bgColor="" />
      </div>
    </>
  );
};

export default Articles;
