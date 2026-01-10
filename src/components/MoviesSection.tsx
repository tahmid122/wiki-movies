import { customFetch } from "@/utilities/customFetch";
import MoviesCard from "./MoviesCard";
interface Props {
  endpoint: string;
}
const MoviesSection = async ({ endpoint }: Props) => {
  const movies = await customFetch(endpoint);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* card */}
      {movies.results.slice(0, 18).map((movie) => (
        <MoviesCard key={movie?.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesSection;
