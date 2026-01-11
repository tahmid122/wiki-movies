"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackWard = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1 bg-slate-800 font-semibold cursor-pointer py-1 px-2 rounded transition-all duration-300 hover:bg-white hover:text-black text-sm group"
    >
      <FaArrowLeft className="group-hover:rotate-360 transition-all duration-500" />
      Back
    </button>
  );
};

export default BackWard;
