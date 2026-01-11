interface Genres {
  id: number;
  name: string;
}
interface ProductionCompanies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
export interface SingleMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  budget: number;
  runtime: number;
  tagline: string | null;
  genres: Genres[];
  production_companies: ProductionCompanies[];
}
