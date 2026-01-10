"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface Props {
  currentPage: number;
}
const Pagination = ({ currentPage }: Props) => {
  const path = usePathname();
  const targetPathname = path.split("/").slice(1, 3).join("/");
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Prev
  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(`/${targetPathname}/${currentPage - 1}`);
    }
  };
  // Next
  const handleNext = () => {
    if (currentPage >= 1) {
      router.push(`/${targetPathname}/${currentPage + 1}`);
    }
  };
  const handleCustomValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (value === "") return;

    const numValue = parseInt(value, 10);

    if (isNaN(numValue) || numValue <= 0) return;

    timeoutRef.current = setTimeout(() => {
      router.push(`/${targetPathname}/${numValue}`);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <div className="flex items-center justify-center">
      {/* pagination box */}
      <button
        onClick={handlePrev}
        className="border border-slate-700 p-2 text-sm cursor-pointer flex items-center justify-center gap-1 hover:bg-white hover:text-black transition-all duration-300"
      >
        <FaArrowLeft /> Prev
      </button>
      <input
        onChange={handleCustomValue}
        min={1}
        type="number"
        defaultValue={currentPage}
        className="border border-slate-700 p-2 text-sm text-white flex items-center justify-center gap-1 text-center bg-transparent outline-none"
      ></input>
      <button
        onClick={handleNext}
        className="border border-slate-700 p-2 text-sm cursor-pointer flex items-center justify-center gap-1 hover:bg-white hover:text-black transition-all duration-300"
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
