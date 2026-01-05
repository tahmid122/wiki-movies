import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavBar = () => {
  return (
    <header className="fixed left-0 top-0 py-2 lg:py-3 w-full z-40 backdrop-blur-xs">
      <nav className="container flex items-center justify-between">
        {/* logo */}

        <Link href={"/"}>
          <h1 className="text-2xl xl:text-3xl uppercase font-bold text-white text-shadow-2xs">
            Wikii 🎞️ Movies
          </h1>
        </Link>

        {/* Nav links */}
        <ul className="md:flex hidden items-center gap-3 font-semibold text-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Movies</Link>
          </li>
          <li>
            <Link href={"/"}>Shows</Link>
          </li>
          <li>
            <Link href={"/"}>Sports</Link>
          </li>
          <li>
            <Link href={"/"}>Free</Link>
          </li>
        </ul>
        {/* Buttons */}
        <div>
          <Link
            href={"/search"}
            className="text-xl w-10 h-10 rounded flex items-center justify-center hover:bg-white/10"
          >
            <FaMagnifyingGlass />
          </Link>
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
