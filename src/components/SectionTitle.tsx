import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title: string;
  link: string;
};
const SectionTitle = ({ title, link = "/" }: Props) => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-white text-3xl font-medium">{title}</h2>
      <Link
        href={link}
        className="flex items-center gap-1 bg-slate-800 font-semibold py-1 px-2 rounded transition-all duration-300 hover:bg-white hover:text-black text-sm group"
      >
        See all{" "}
        <FaArrowRight className="group-hover:rotate-360 transition-all duration-500" />
      </Link>
    </div>
  );
};

export default SectionTitle;
