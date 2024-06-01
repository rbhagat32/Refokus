import React from "react";

const ArticleItem = ({ item }) => {
  return (
    <div className="group flex gap-24 items-center py-6 border-b border-zinc-700 hover:border-[#fff] transition-all duration-300 ease-in-out">
      <p className="group-hover:text-zinc-300 text-zinc-500">Article</p>
      <h2 className="text-2xl font-medium">{item}</h2>
    </div>
  );
};

export default ArticleItem;
