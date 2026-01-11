import { customFetch } from "@/utilities/customFetch";
import MoviesCard from "./MoviesCard";
import { notFound } from "next/navigation";
interface Props {
  endpoint: string;
  page?: number;
  other?: string;
}
const MoviesSection = async ({ endpoint, page, other }: Props) => {
  const movies = await customFetch(endpoint, page, other);
  if (movies.results.length === 0) {
    notFound();
  }
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
