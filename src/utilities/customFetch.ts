import { Result } from "@/types/resultType";
import { TMDB_BASE_URL } from "./baseUrls";
export const customFetch = async (endPoint: string): Promise<Result> => {
  try {
    const res = await fetch(
      `${TMDB_BASE_URL}${endPoint}?api_key=${process.env.TMDB_API_KEY}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: Result = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
};
