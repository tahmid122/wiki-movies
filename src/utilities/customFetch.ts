import { Result } from "@/types/resultType";
import { TMDB_BASE_URL } from "./baseUrls";
export const customFetch = async (
  endPoint: string,
  page?: number
): Promise<Result> => {
  try {
    const res = await fetch(
      `${TMDB_BASE_URL}${endPoint}?api_key=${process.env.TMDB_API_KEY}&page=${
        page || 1
      }`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: Result = await res.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
    return { page: 1, results: [], total_pages: 0, total_results: 0 };
  }
};
