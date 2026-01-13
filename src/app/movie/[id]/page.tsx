import { TMDB_IMAGE_URL } from "@/utilities/baseUrls";
import { fetchSingleMovie } from "@/utilities/fetchSingleMovie";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Cast from "./Cast";
import Recommended from "./Recommended";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};
// meta data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await params;
  const targetMovie = await fetchSingleMovie(parseInt(slug.id));
  return {
    title: targetMovie.title,
    description: targetMovie.overview,
  };
}

const SingleMovie = async ({ params }: Props) => {
  const { id } = await params;
  const targetMovie = await fetchSingleMovie(parseInt(id));
  return (
    <section className="py-20 lg:py-30">
      <div className="container">
        {/* details */}
        {/* top */}
        <div className="border-b border-slate-800 mb-5 flex flex-col sm:flex-row items-end pb-5 gap-5">
          {/* Image */}
          <div className="w-full overflow-hidden sm:min-w-88 sm:max-w-88">
            <div className="relative h-112 w-full sm:min-w-88 sm:max-w-88">
              <Image
                src={`${TMDB_IMAGE_URL}${targetMovie?.poster_path}`}
                fill
                alt={targetMovie?.title}
                className="object-cover pb-2"
              />
            </div>
          </div>
          {/* left */}
          <div className="lg:p-2">
            {/* title runtime */}
            <div className="space-y-1 mb-3">
              <div className="flex items-end flex-wrap gap-2 mb-3">
                <h2 className="text-2xl font-semibold">{targetMovie?.title}</h2>
                <p className="text-sm">{targetMovie?.tagline}</p>
              </div>
              <p>
                {targetMovie?.release_date} • {targetMovie?.runtime} min
              </p>
              {/* Genres */}
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-base font-semibold">Genres:</h3>
                <ul className="flex gap-2 items-center flex-wrap">
                  {targetMovie?.genres.map((genre) => (
                    <li key={genre?.id}>
                      <Link
                        href={`/movies/genres/${genre?.name.toLocaleLowerCase()}/${
                          genre?.id
                        }/1`}
                        className="underline"
                      >
                        {genre?.name}
                      </Link>
                    </li>
                  ))}{" "}
                </ul>
              </div>
              {/* budget */}
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">Budget:</h3>
                <p>{targetMovie?.budget}</p>
              </div>
              {/* Vote Average */}
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">Vote Average:</h3>
                <p>{targetMovie?.vote_average}</p>
              </div>
            </div>
            {/* overview */}
            <p className="text-justify">{targetMovie?.overview}</p>
          </div>
        </div>

        {/* Production companies */}
        <div className="flex flex-col gap-2 mt-5">
          <h3 className="text-xl text-white font-semibold">
            Production Companies:
          </h3>
          <div className="flex items-center gap-2">
            {targetMovie?.production_companies.length > 0 &&
              targetMovie?.production_companies.map((company) => (
                <div key={company?.id}>
                  {company?.logo_path && (
                    <div className="relative w-20 h-20 bg-white">
                      <Image
                        src={`${TMDB_IMAGE_URL}${company?.logo_path}`}
                        alt={company?.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* Casts */}
        <div className="flex flex-col gap-2 mt-5">
          <h3 className="text-xl text-white font-semibold mb-5">
            Casts and Credits:
          </h3>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cast id={parseInt(id)} />
          </Suspense>
        </div>
        {/* You May Like */}
        <div className="flex flex-col gap-2 mt-5">
          <h3 className="text-xl text-white font-semibold mb-5">
            You May Like:
          </h3>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Recommended genre={targetMovie?.genres[0]?.id} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
