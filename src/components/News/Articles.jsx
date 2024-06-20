import React from "react";
import ArticleItem from "./ArticleItem";
import Button from "../Utils/Button";

const Articles = () => {
  const data = [
    "The Strategic Importance of a Cool Website for Venture Capital Firms",
    "Why Refokus is the Best Partner to Build Your Venture Capital Website",
    "The Future of Web Design: Webflow's Unmatched Advantage Over WordPress",
    "Spotlight on Innovation: Webflow's Case Study of Refokus",
    "Elevating Web Development: How Refokus Harnesses Webflow and Emerging Technologies",
    "Elevating Your Brand: Why a Custom Webflow Website is a Game-Changer for Startups",
    "Maximizing SEO on Webflow: How Webflow Empowers Your Site's Search Performance",
    "Refokus at Webflow Conf 2023: A Fusion of Design and Technology",
    "Refokus and the Future of AI in Web Design: A Spotlight on Webflow's Blog Feature",
    "Onboarding your team to harness the power of AI",
  ];

  return (
    <>
      <div className="mx-28 mb-20">
        {data.map((item, index) => {
          return <ArticleItem key={index} item={item} />;
        })}
      </div>

      <div className="flex justify-center">
        <Button buttonText="View More" altText="Show More" bgColor="" />
      </div>
    </>
  );
};

export default Articles;
