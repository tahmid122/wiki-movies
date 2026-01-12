"use client";
import { ChangeEvent, useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <section className="py-20">
      <div className="container">
        {/*  */}
        <div className="mb-5">
          <div className="max-w-212.5 mx-auto px-3">
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              type="text"
              name="search"
              className="w-full border border-slate-700 outline-none text-base p-3 rounded-xl sticky top-5 left-0 z-50 focus:border-slate-500 bg-black"
              placeholder="Search movies"
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
