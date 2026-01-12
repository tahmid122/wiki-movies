import { TMDB_BASE_URL } from "@/utilities/baseUrls";
import { customFetch } from "@/utilities/customFetch";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
interface Genre {
  id: number;
  name: string;
}
const NavBar = async () => {
  const res = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const genres: { genres: Genre[] } = await res.json();
  return (
    <header className="fixed left-0 top-0 py-2 lg:py-3 w-full z-40 bg-black border-b border-b-slate-700">
      <nav className="container flex items-center justify-between">
        {/* logo */}

        <Link href={"/"}>
          <div className="text-xl xl:text-xl uppercase font-bold text-white text-shadow-2xs flex items-center">
            Wikii
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={"/movielogo.jpg"}
                fill
                alt="Wikii movies"
                className="object-cover"
              />
            </div>{" "}
            Movies
          </div>
        </Link>

        {/* Nav links */}
        <ul className="md:flex hidden items-center gap-3 text-base">
          <li>
            <Link
              className="hover:text-red-500 transition-all duration-300"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="relative group">
              <span className="hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer">
                Genres <FaAngleDown />
              </span>
              {/* sub genres */}
              <ul className="absolute hidden group-hover:flex left-0 top-6 w-60 bg-black border border-slate-700 p-3  flex-col gap-3 rounded max-h-[60vh] overflow-y-auto no-scrollbar2">
                {genres.genres &&
                  genres.genres?.length > 0 &&
                  genres.genres.map((genre) => (
                    <li key={genre?.id}>
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
          <li>
            <div className="relative group">
              <span className="hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer">
                Categories <FaAngleDown />
              </span>
              {/* sub categories */}
              <ul className="absolute hidden group-hover:flex left-0 top-6 w-60 bg-black border border-slate-700 p-3  flex-col gap-3 rounded">
                <li>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/trending/1"}
                  >
                    Trending
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/popular/1"}
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/top_rated/1"}
                  >
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-red-500 transition-all duration-300 hover:ml-2 relative w-full block"
                    href={"/movies/upcoming/1"}
                  >
                    Upcoming
                  </Link>
                </li>
                <li>
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
          <li className="hover:text-red-500 transition-all duration-300">
            <Link href={"/search"}>Search</Link>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href={"/search"}
            className="text-xl w-10 h-10 rounded flex items-center justify-center hover:bg-white/10"
          >
            <FaMagnifyingGlass className="text-xl" />
          </Link>
          <div className="cursor-pointer lg:hidden">
            <FaBars className="text-[22px]" />
          </div>
        </div>
      </nav>
      {/* Mobile nav links */}
      {/* Nav links */}
      <ul className="flex md:hidden mt-2 items-center gap-2 font-semibold text-base flex-nowrap overflow-x-auto no-scrollbar px-2">
        <li className="bg-white/10 py-1 px-3 transition-all duration-300 hover:bg-white hover:text-black rounded-full text-sm">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="bg-white/10 py-1 px-3 transition-all duration-300 hover:bg-white hover:text-black rounded-full text-sm">
          <Link href={"/"}>Movies</Link>
        </li>
        <li className="bg-white/10 py-1 px-3 transition-all duration-300 hover:bg-white hover:text-black rounded-full text-sm">
          <Link href={"/"}>Shows</Link>
        </li>
        <li className="bg-white/10 py-1 px-3 transition-all duration-300 hover:bg-white hover:text-black rounded-full text-sm">
          <Link href={"/"}>Sports</Link>
        </li>
        <li className="bg-white/10 py-1 px-3 transition-all duration-300 hover:bg-white hover:text-black rounded-full text-sm">
          <Link href={"/"}>Free</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
