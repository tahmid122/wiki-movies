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
    </section>
  );
};

export default Home;
