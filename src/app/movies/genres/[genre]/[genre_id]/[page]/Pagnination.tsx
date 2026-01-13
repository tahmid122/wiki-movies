"use client";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useMemo } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface Props {
  currentPage: number;
  totalPages: number;
}
const Pagination = ({ currentPage, totalPages }: Props) => {
  const path = usePathname();
  const targetPathname = path.split("/").slice(1, 5).join("/");
  const router = useRouter();

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
  const handleCustomValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") return;
    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue <= 0) return;
    router.push(`/${targetPathname}/${numValue}`);
  };

  const numbers = useMemo(() => {
    return [...Array(totalPages > 100 ? 100 : totalPages).keys()].map(
      (n) => n + 1
    );
  }, [totalPages]);
  return (
    <div className="flex items-center justify-center mt-20">
      {/* pagination box */}
      <button
        onClick={handlePrev}
        disabled={currentPage <= 1}
        className=" p-2 text-sm cursor-pointer flex items-center justify-center gap-1 hover:text-red-500  transition-all duration-300"
      >
        <FaArrowLeft /> Prev
      </button>
      <select
        onChange={handleCustomValue}
        defaultValue={currentPage}
        className="border border-red-700 p-2 text-sm text-white flex items-center justify-center gap-1 text-center outline-none bg-black no-scrollbar2"
      >
        {numbers?.map((number) => (
          <option key={number}>{number}</option>
        ))}
      </select>
      <button
        onClick={handleNext}
        disabled={currentPage >= 100}
        className=" p-2 text-sm cursor-pointer flex items-center justify-center gap-1 hover:text-red-500  transition-all duration-300"
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
