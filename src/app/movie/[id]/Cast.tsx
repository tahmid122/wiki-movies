import { TMDB_BASE_URL, TMDB_IMAGE_URL } from "@/utilities/baseUrls";
import Image from "next/image";

interface Cast {
  id: number;
  original_name: string;
  profile_path: string | null;
  character: string;
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
    `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`
  );

  const data: Result = await res.json();
  const casts: Cast[] = data.cast;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {casts?.map((cast) => (
        <div key={cast.id}>
          {/* image */}
          {cast?.profile_path && (
            <div className="w-15 h-15 rounded-full overflow-hidden relative">
              <Image
                src={`${TMDB_IMAGE_URL}${cast?.profile_path}`}
                fill
                sizes="(max-width: 768px) 100%"
                alt={cast?.original_name}
                className="object-cover hover:scale-125 transition-all duration-300"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cast;
