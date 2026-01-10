import MoviesSection from "@/components/MoviesSection";
import Pagination from "@/components/Pagination";
import SkeltonMovies from "@/components/SkeltonMovies";
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

  return (
    <section className="py-15">
      {category !== "trending" ? (
        <section className="py-15">
          <div className="container">
            <h2 className="text-white text-3xl font-medium mb-10 capitalize">
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
        <section className="py-15">
          <div className="container">
            <h2 className="text-white text-3xl font-medium mb-10 capitalize">
              {category}
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
        <Pagination currentPage={pageNumber} />
      </div>
    </section>
  );
};

export default MovieListByCategory;
