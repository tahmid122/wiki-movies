import { SingleMovie } from "@/types/singleMovieType";
import { TMDB_BASE_URL } from "./baseUrls";
import { notFound } from "next/navigation";

export const fetchSingleMovie = async (id: number): Promise<SingleMovie> => {
  try {
    const res = await fetch(
      `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: SingleMovie = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    notFound();
  }
};
