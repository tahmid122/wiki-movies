"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackWard = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex cursor-pointer items-center gap-1 bg-red-500 font-semibold py-1 px-2 rounded transition-all duration-300 hover:bg-red-700 text-sm group"
    >
      <FaArrowLeft className="group-hover:ml-2 transition-all duration-300" />
      Back
    </button>
  );
};

export default BackWard;
