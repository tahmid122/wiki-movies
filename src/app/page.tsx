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
        link="/movies/trending/1"
        endpoint="/trending/movie/week"
      />
      {/* Popular Section */}
      <MovieSectionContainer
        title="Popular"
        link="/movies/popular/1"
        endpoint="/movie/popular"
      />
      {/* Top Rated Section */}
      <MovieSectionContainer
        title="Top Rated"
        link="/movies/top_rated/1"
        endpoint="/movie/top_rated"
      />
      {/* Upcoming Section */}
      <MovieSectionContainer
        title="Upcoming"
        link="/movies/upcoming/1"
        endpoint="/movie/upcoming"
      />
      {/* Movies in theatre Section */}
      <MovieSectionContainer
        title="Movies In Theatre"
        link="/movies/now_playing/1"
        endpoint="/movie/now_playing"
      />
    </section>
  );
};

export default Home;
