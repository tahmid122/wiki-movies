import Image from "next/image";
import Link from "next/link";

const MoviesCard = () => {
  return (
    <Link
      href={`/movie/1`}
      className="space-y-2 group transition-all duration-300"
    >
      <div className="w-full h-90 rounded-lg border border-slate-700 relative overflow-hidden">
        <Image
          src={"/banner/banner9.jpg"}
          alt="image image"
          fill
          className="object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <span className="block text-center font-semibold">Movie Name</span>
    </Link>
  );
};

export default MoviesCard;
