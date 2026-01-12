import { TMDB_BASE_URL } from "@/utilities/baseUrls";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  if (!query) {
    return NextResponse.json({ result: [] });
  }
  const res = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
