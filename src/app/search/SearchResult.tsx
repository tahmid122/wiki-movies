"use client";

import MoviesCard from "@/components/MoviesCard";
import SkeltonMovies from "@/components/SkeltonMovies";
import { Movie } from "@/types/movieType";
import { Result } from "@/types/resultType";
import { useEffect, useState } from "react";

interface Props {
  query: string;
}

const SearchResult = ({ query }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }
    const timer = setTimeout(() => {
      const fetchSearch = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            `/api/search?query=${encodeURIComponent(query)}`
          );
          const data: Result = await res.json();
          const movies: Movie[] = data.results;
          setMovies(movies || []);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchSearch();
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);
  return (
    <div className="w-full min-h-125 mt-5">
      {loading ? (
        <SkeltonMovies />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-center col-span-full">
              {query
                ? " No movies found. Please search with correct name"
                : "Start searching by movie name"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
