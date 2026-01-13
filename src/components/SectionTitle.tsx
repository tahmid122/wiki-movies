import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title: string;
  link: string;
};
const SectionTitle = ({ title, link = "/" }: Props) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h2 className="text-white text-3xl font-medium border-l-4 border-l-red-500 pl-2">
        {title}
      </h2>
      <Link
        href={link}
        className="flex items-center gap-1 text-red-500 py-1 px-2 rounded transition-all duration-300 hover:text-red-700 text-sm group capitalize font-bold"
      >
        See all
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default SectionTitle;
