import { Result } from "@/types/resultType";
import { TMDB_BASE_URL } from "@/utilities/baseUrls";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");
  if (!endpoint) {
    return NextResponse.json({ result: [] });
  }
  const res = await fetch(
    `${TMDB_BASE_URL}/${endpoint}?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data: Result = await res.json();
  return NextResponse.json(data);
}
