import { Suspense } from "react";
import SectionTitle from "./SectionTitle";
import MoviesSection from "./MoviesSection";

interface Props {
  title: string;
  endpoint: string;
  link: string;
}
const MovieSectionContainer = ({ title, endpoint, link }: Props) => {
  return (
    <section className="py-15">
      <div className="container">
        <SectionTitle title={title} link={link} />
        {/* Movies Section */}
        <Suspense fallback={<div>Loading....</div>}>
          <MoviesSection endpoint={endpoint} />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieSectionContainer;
