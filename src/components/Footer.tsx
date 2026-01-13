import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black pt-10">
      <div className="container w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"}>
              <div className="text-xl xl:text-2xl uppercase font-bold text-white text-shadow-2xs flex items-center">
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
            <p className="text-base">
              Wikii Movies is your all-in-one entertainment hub with <br />{" "}
              Movies, Series, Live TV & more!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Top Categories
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link href="/movies/trending/1" className="hover:underline">
                    Trending
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/movies/popular/1" className="hover:underline">
                    Popular
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/movies/top_rated/1" className="hover:underline">
                    Top Rated
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/movies/upcoming/1" className="hover:underline">
                    Upcoming
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/movies/now_playing/1"
                    className="hover:underline"
                  >
                    Now Playing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Top Genres
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link
                    href="/movies/genres/fantasy/14/1"
                    className="hover:underline"
                  >
                    Fantasy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/movies/genres/horror/27/1"
                    className="hover:underline"
                  >
                    Horror
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/movies/genres/mystery/9648/1"
                    className="hover:underline"
                  >
                    Mystery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/movies/genres/thriller/53/1"
                    className="hover:underline"
                  >
                    Thriller
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/movies/genres/western/37/1"
                    className="hover:underline"
                  >
                    Western
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                About company
              </h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Copyright
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    References
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center text-center w-full block sm:inline sm:w-auto">
            © 2026
            <Link href="/" className="hover:underline">
              {" "}
              Wikii Movies
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/TahmidAlamJG"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center hover:bg-red-700 hover:-translate-y-2 transition-all duration-300 rounded-full"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdtahmidalam/"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center hover:bg-red-700 hover:-translate-y-2 transition-all duration-300 rounded-full"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://github.com/tahmid122"
              target="_blank"
              className=" w-10 h-10 flex items-center justify-center hover:bg-red-700 hover:-translate-y-2 transition-all duration-300 rounded-full"
            >
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
