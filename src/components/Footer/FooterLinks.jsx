import React from "react";

const FooterLinks = () => {
  return (
    <div className="px-24 my-5 flex justify-between items-center">
      <div className="flex gap-8">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
        ].map((item, index) => {
          return (
            <a
              key={index}
              className="hover:text-zinc-300 hover:translate-x-1 transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
          );
        })}
      </div>
      <img loading="lazy" src="/work/footer-image.svg" />
    </div>
  );
};

export default FooterLinks;
