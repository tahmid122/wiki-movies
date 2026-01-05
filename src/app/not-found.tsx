import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2 p-5">
      <h1 className="text-7xl text-white font-bold">404</h1>
      <p className="sm:max-w-110 text-center font-semibold">
        Oops! The page you&apos;re looking for can&apos;t be found. It may no
        longer exist or the link is incorrect. Please check the URL, or go back
        to the homepage and search
      </p>
      <Link
        href={"/"}
        className="flex items-center gap-2 py-2 px-4 bg-slate-800 rounded transition-all duration-300 hover:bg-white hover:text-black font-semibold group"
      >
        <FaArrowLeft className="group-hover:rotate-360 transition-all duration-500" />{" "}
        Go Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
