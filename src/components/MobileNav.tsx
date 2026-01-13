"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown, FaXmark } from "react-icons/fa6";
interface Genre {
  id: number;
  name: string;
}
interface Props {
  genres: {
    genres: Genre[];
  };
}
const MobileNav = ({ genres }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isGenreShow, setIsGenreShow] = useState<boolean>(false);
  const [iscategoriesShow, setIsCategoriesShow] = useState<boolean>(false);
  return (
    <div className="lg:hidden">
      <span className="cursor-pointer" onClick={(): void => setIsOpen(true)}>
        <FaBars className="text-[22px]" />
      </span>
      {/* links */}
      <div
        className={`w-full bg-[#000000b4] h-screen ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 top-0 z-999 transition-all duration-300 overflow-x-hidden`}
      >
        <ul className="lg:hidden flex flex-col h-full overflow-y-auto no-scrollbar2 items-start gap-3 text-base bg-black w-[70%] p-5 overflow-x-hidden">
          <li className="flex items-center justify-end w-full sticky top-0 right-0 z-999">
            <span onClick={(): void => setIsOpen(false)}>
              <FaXmark className="text-[24px] cursor-pointer" />
            </span>
          </li>
          <li onClick={(): void => setIsOpen(false)}>
            <Link
              className="hover:text-red-500 transition-all duration-300"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <div className="relative group w-full">
              <span
                onClick={(): void => setIsGenreShow((prev) => !prev)}
                className="hover:text-red-500 transition-all duration-300 flex items-center justify-start gap-1 cursor-pointer"
              >
                Genres <FaAngleDown />
              </span>
              {/* sub genres */}
              <ul
                className={`${
                  isGenreShow ? "flex" : "hidden"
                } bg-black flex-col gap-3 rounded w-full ml-5 pt-5`}
              >
                {genres.genres &&
                  genres.genres?.length > 0 &&
                  genres.genres.map((genre) => (
                    <li key={genre?.id} onClick={(): void => setIsOpen(false)}>
                      <Link
                        className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                        href={`/movies/genres/${genre.name.toLocaleLowerCase()}/${
                          genre.id
                        }/1`}
                      >
                        {genre?.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
          <li className="w-full">
            <div className="relative group">
              <span
                onClick={(): void => setIsCategoriesShow((prev) => !prev)}
                className="hover:text-red-500 transition-all duration-300 flex items-center justify-start gap-1 cursor-pointer"
              >
                Categories <FaAngleDown />
              </span>
              {/* sub categories */}
              <ul
                className={`${
                  iscategoriesShow ? "flex" : "hidden"
                } left-0 top-6 w-full bg-black 3  flex-col gap-3 rounded ml-5 pt-5`}
              >
                <li onClick={(): void => setIsOpen(false)}>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/trending/1"}
                  >
                    Trending
                  </Link>
                </li>
                <li onClick={(): void => setIsOpen(false)}>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/popular/1"}
                  >
                    Popular
                  </Link>
                </li>
                <li onClick={(): void => setIsOpen(false)}>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/top_rated/1"}
                  >
                    Top Rated
                  </Link>
                </li>
                <li onClick={(): void => setIsOpen(false)}>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/upcoming/1"}
                  >
                    Upcoming
                  </Link>
                </li>
                <li onClick={(): void => setIsOpen(false)}>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/now_playing/1"}
                  >
                    In Theatre
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={(): void => setIsOpen(false)}
            className="hover:text-red-500 transition-all duration-300"
          >
            <Link href={"/search"}>Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
