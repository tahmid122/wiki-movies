import BackWard from "@/components/BackWard";
import { TMDB_IMAGE_URL } from "@/utilities/baseUrls";
import { fetchSingleMovie } from "@/utilities/fetchSingleMovie";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  params: {
    id: string;
  };
}
const SingleMovie = async ({ params }: Props) => {
  const { id } = await params;
  const targetMovie = await fetchSingleMovie(parseInt(id));

  return (
    <section className="py-30">
      <div className="container">
        <BackWard />
        {/* details */}
        <div className="max-w-212.5 mx-auto px-3">
          {/* Image */}
          <div className="w-full h-112 relative overflow-hidden border-b border-slate-700 mb-5">
            <Image
              src={`${TMDB_IMAGE_URL}${targetMovie?.poster_path}`}
              fill
              alt={targetMovie?.title}
              className="object-contain pb-2"
            />
          </div>
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
            <ul className="flex items-center gap-2">
              <h3 className="text-base font-semibold">Genres:</h3>
              {targetMovie?.genres.map((genre) => (
                <li key={genre?.id}>
                  <Link href={"/"} className="hover:underline">
                    {genre?.name}
                  </Link>
                </li>
              ))}
            </ul>
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
          {/* Production companies */}
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-base font-semibold">Production Companies:</h3>
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
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
