import { Movie } from "@/types/movieType";
import { TMDB_IMAGE_URL } from "@/utilities/baseUrls";
import Image from "next/image";
import Link from "next/link";
interface Props {
  movie: Movie;
}
const MoviesCard = ({ movie }: Props) => {
  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="space-y-2 group transition-all duration-300"
    >
      <div className="w-full h-90 rounded-lg border border-slate-700 relative overflow-hidden">
        <Image
          src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
          alt={movie?.title}
          loading="eager"
          fill
          sizes="(max-width: 768px) 100%, 100%"
          className="object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <span className="block text-center font-semibold">{movie?.title}</span>
    </Link>
  );
};

export default MoviesCard;
