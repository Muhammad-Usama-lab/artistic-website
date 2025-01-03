"use client";

import { useInView } from "react-intersection-observer";
const Features = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section
        id="features"
        ref={ref}
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container px-4">
          <h1
            className={`${isVisible ? "fade-in" : ""} uppercase max-w-8xl primary-font mt-10 md:mt-0 text-2xl sm:text-3xl md:text-4xl xl:text-6xl sm:p-4 mb-4`}
          >
            {/* {" lg:text-8xl sm:text-6xl text-4xl "} */}
            Artistic Renewables
          </h1>

          <h5
            className={`${isVisible ? "fade-in" : ""} text-justify max-w-3xl primary-font lg:text-3xl  sm:p-4 pt-4 sm:pt-2`}
          >
            Artistic Milliners has played a major role in renewable energy in
            Pakistan. Our current and in-process renewable energy projects play
            a pivotal role in shifting away from energy generated from imported
            fossil fuels, substituting carbon emissions, and reducing the cost
            of energy generation.
          </h5>
        </div>
      </section>
    </>
  );
};

export default Features;
