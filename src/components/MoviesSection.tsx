import MoviesCard from "./MoviesCard";

const MoviesSection = async () => {
  await new Promise<void>((resolve) => {
    setTimeout((): void => {
      resolve();
    }, 3000);
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* card */}
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </div>
  );
};

export default MoviesSection;
