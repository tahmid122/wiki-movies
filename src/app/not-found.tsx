"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2 p-5">
      <h1 className="text-7xl text-white font-bold">404</h1>
      <p className="sm:max-w-110 text-center font-semibold">
        Oops! The page you&apos;re looking for can&apos;t be found. It may no
        longer exist or the link is incorrect. Please check the URL, or go back
        to the homepage and search
      </p>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 cursor-pointer py-2 px-4 bg-red-500 rounded transition-all duration-300 hover:bg-red-700 font-semibold group"
      >
        <FaArrowLeft className="group-hover:mr-2 transition-all duration-300" />{" "}
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
