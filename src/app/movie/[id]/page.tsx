import { fetchSingleMovie } from "@/utilities/fetchSingleMovie";

interface Props {
  params: {
    id: string;
  };
}
const SingleMovie = async ({ params }: Props) => {
  const { id } = await params;
  const targetMovie = await fetchSingleMovie(parseInt(id));
  console.log(targetMovie);

  return (
    <section className="py-30">
      <div className="container">Single Movie</div>
    </section>
  );
};

export default SingleMovie;
