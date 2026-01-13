import { TMDB_BASE_URL, TMDB_IMAGE_URL } from "@/utilities/baseUrls";
import Image from "next/image";

interface Cast {
  id: number;
  original_name: string;
  profile_path: string | null;
  character: string;
  known_for_department: string;
}
interface Result {
  id: number;
  cast: Cast[];
}
interface Props {
  id: number;
}
const Cast = async ({ id }: Props) => {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data: Result = await res.json();
  const casts: Cast[] = data.cast;
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
      {casts?.map((cast) => (
        <div key={cast.id} className={`${cast?.profile_path || "hidden"}`}>
          {/* image */}

          <div className="flex items-center justify-center gap-2 flex-col">
            <div className="w-35 h-35 rounded overflow-hidden relative">
              <Image
                src={`${TMDB_IMAGE_URL}${cast?.profile_path}`}
                fill
                sizes="(max-width: 768px) 100%"
                alt={cast?.original_name}
                className="object-cover hover:scale-125 transition-all duration-300"
              />
            </div>
            {/* details */}
            <div className="text-center text-sm">
              <p className="font-semibold text-white">{cast.original_name}</p>
              <p className="text-xs">{cast.known_for_department}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
