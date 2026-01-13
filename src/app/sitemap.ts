import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wikiimovies.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://wikiimovies.vercel.app/movie",
      lastModified: new Date(),
    },
    {
      url: "https://wikiimovies.vercel.app/genres",
      lastModified: new Date(),
    },
  ];
}
