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
            International/Local
          </h1>

          <h5
            className={`${isVisible ? "fade-in" : ""}  max-w-3xl primary-font lg:text-3xl  sm:p-4 pt-4 sm:pt-2`}
          >
            Artistic Milliners is building the global denim company of the
            future. At the heart of this endeavor is the belief in innovation,
            sustainability, technology and access to facilities, products and
            services around the globe.
          </h5>
        </div>
      </section>
    </>
  );
};

export default Features;
