import MoviesSection from "@/components/MoviesSection";
import SkeltonMovies from "@/components/SkeltonMovies";
import { Suspense } from "react";
import Pagination from "./Pagnination";
import { TMDB_BASE_URL } from "@/utilities/baseUrls";
import { Result } from "@/types/resultType";

interface Props {
  params: {
    genre: string;
    genre_id: string;
    page: string;
  };
}
const GenreMovies = async ({ params }: Props) => {
  const { genre, genre_id, page } = await params;
  // get page numbers
  const res = await fetch(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genre_id}&api_key=${process.env.TMDB_API_KEY}`
  );
  const data: Result = await res.json();
  return (
    <section className="py-30">
      <div className="container">
        <h2 className="text-white text-3xl font-medium capitalize mb-5">
          {decodeURIComponent(genre)}
        </h2>
        {/* movies container */}
        <Suspense fallback={<SkeltonMovies />}>
          <MoviesSection
            endpoint={`/discover/movie`}
            other={`with_genres=${genre_id}`}
            page={parseInt(page)}
          />
        </Suspense>
        {/*  Pagination*/}
        <div className="mt-10">
          <Pagination
            currentPage={parseInt(page)}
            totalPages={data?.total_pages}
          />
        </div>
      </div>
    </section>
  );
};

export default GenreMovies;
