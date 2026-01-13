"use client";
import { ChangeEvent, useState } from "react";
import SearchResult from "./SearchResult";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <section className="py-20">
      <div className="container">
        {/*  */}
        <div>
          <div className="max-w-212.5 mx-auto px-3 sticky top-16 lg:top-18 left-0 z-30">
            <FaMagnifyingGlass className="absolute top-[50%] -translate-y-[50%] left-5 text-xl z-40 text-gray-400" />

            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              type="text"
              name="search"
              className="w-full border border-slate-700 outline-none text-base p-3 sticky top-5 left-0 z-30 focus:border-red-500 bg-black pl-9"
              placeholder="Search movies..."
            />
          </div>
          {/* search result */}
          <SearchResult query={query} />
        </div>
      </div>
    </section>
  );
};

export default Search;
