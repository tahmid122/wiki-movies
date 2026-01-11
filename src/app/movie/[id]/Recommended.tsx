import MoviesCard from "@/components/MoviesCard";
import { Result } from "@/types/resultType";
import { TMDB_BASE_URL } from "@/utilities/baseUrls";

interface Props {
  genre: number;
}
const Recommended = async ({ genre }: Props) => {
  const res = await fetch(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genre}&api_key=${process.env.TMDB_API_KEY}`
  );
  const data: Result = await res.json();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {data?.results.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Recommended;
