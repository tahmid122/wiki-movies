import { Suspense } from "react";
import MoviesSection from "../MoviesSection";
import SectionTitle from "../SectionTitle";

const Trending = () => {
  return (
    <section className="py-15">
      <div className="container">
        <SectionTitle title="Trending" link="/" />
        {/* Movies Section */}
        <Suspense fallback={<div>Loading....</div>}>
          <MoviesSection />
        </Suspense>
      </div>
    </section>
  );
};

export default Trending;
