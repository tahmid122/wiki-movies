import Banner from "@/components/home/Banner";
import MovieSectionContainer from "@/components/MovieSectionContainer";

const Home = () => {
  return (
    <section>
      {/* Banner */}
      <Banner />
      {/* Trending Section */}
      <MovieSectionContainer
        title="Trending"
        link="/movies/trending"
        endpoint="/trending/movie/week"
      />
      {/* Popular Section */}
      <MovieSectionContainer
        title="Popular"
        link="/movies/popular"
        endpoint="/movie/popular"
      />
      {/* Top Rated Section */}
      <MovieSectionContainer
        title="Top Rated"
        link="/movies/top_rated"
        endpoint="/movie/top_rated"
      />
      {/* Upcoming Section */}
      <MovieSectionContainer
        title="Upcoming"
        link="/movies/upcoming"
        endpoint="/movie/upcoming"
      />
      {/* Movies in theatre Section */}
      <MovieSectionContainer
        title="Movies In Theatre"
        link="/movies/now_playing"
        endpoint="/movie/now_playing"
      />
    </section>
  );
};

export default Home;
