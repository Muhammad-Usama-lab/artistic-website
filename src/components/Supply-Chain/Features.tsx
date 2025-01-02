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
        <div className="container-full p-4">
          <h1 className={`${isVisible ? "fade-in" : ""} max-w-8xl primary-font lg:text-8xl sm:text-6xl text-4xl sm:p-4 sm:pt-10 uppercase my-10 `}>
            OUR STRATEGY <br />
            IS ALSO <span className="text-primary ">SUSTAINABLE</span> .
          </h1>

          <h5 className={`${isVisible ? "fade-in" : ""} max-w-5xl primary-font lg:text-5xl  text-xl sm:p-4 sm:pt-10`}>
            We are curating an ecosystem that not only addresses the needs of
            our customers, it anticipates those needs.
          </h5>
        </div>
      </section>
    </>
  );
};

export default Features;
