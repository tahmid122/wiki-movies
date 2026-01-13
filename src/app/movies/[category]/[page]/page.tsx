import MoviesSection from "@/components/MoviesSection";
import Pagination from "@/components/Pagination";
import SkeltonMovies from "@/components/SkeltonMovies";
import { Result } from "@/types/resultType";
import { TMDB_BASE_URL } from "@/utilities/baseUrls";
import { Suspense } from "react";

interface Props {
  params: {
    page: string;
    category: string;
  };
}
const MovieListByCategory = async ({ params }: Props) => {
  const queryParams = await params;
  const pageNumber = parseInt(queryParams.page);
  const category = queryParams.category;
  const endpoint =
    queryParams.category != "trending"
      ? `movie/${queryParams.category}`
      : `${queryParams.category}/movie/day`;
  // get page numbers
  const res = await fetch(
    `${TMDB_BASE_URL}/${endpoint}?api_key=${process.env.TMDB_API_KEY}`
  );
  const data: Result = await res.json();
  return (
    <section className="py-20 lg:py-30">
      {category !== "trending" ? (
        <section>
          <div className="container">
            <h2 className="text-white text-3xl font-medium border-l-4 border-l-red-500 pl-2 mb-10 capitalize">
              {category} ({pageNumber})
            </h2>
            {/* Movies Section */}
            <Suspense fallback={<SkeltonMovies />}>
              <MoviesSection
                endpoint={`/movie/${category}`}
                page={pageNumber}
              />
            </Suspense>
          </div>
        </section>
      ) : (
        <section className="py-20 lg:py-30">
          <div className="container">
            <h2 className="text-white text-3xl font-medium border-l-4 border-l-red-500 pl-2 mb-10 capitalize">
              {category} ({pageNumber})
            </h2>
            {/* Movies Section */}
            <Suspense fallback={<SkeltonMovies />}>
              <MoviesSection
                endpoint={`/trending/movie/week`}
                page={pageNumber}
              />
            </Suspense>
          </div>
        </section>
      )}
      {/* Pagination */}
      <div className="container">
        <Pagination
          currentPage={pageNumber}
          totalPages={data.total_pages || 0}
        />
      </div>
    </section>
  );
};

export default MovieListByCategory;
