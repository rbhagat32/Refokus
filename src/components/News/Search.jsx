import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex justify-between items-center py-12 mx-28">
      <div className="relative">
        <input
          className="rounded-full text-zinc-300 placeholder:text-zinc-300 bg-zinc-800 py-2 px-10"
          type="text"
          placeholder="Search"
        />
        <div className="pl-4 pt-3 absolute top-0 left-0">
          <IoSearch />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        {["All", "Articles", "News", "Resources"].map((item, index) => {
          return (
            <button
              className="hover:text-zinc-50 text-zinc-300 py-2 px-5 bg-zinc-800 rounded-full transition-all duration-300 ease-in-out"
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
