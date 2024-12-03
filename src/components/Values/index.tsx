"use client";

import { useInView } from "react-intersection-observer";
import Button from "../Button";

const OurValues = () => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <>
      <section
        id="our-values"
        className="min-h-screen flex py-16 md:py-15 lg:py-20"
      >
        <div className="container-full px-10" ref={inViewRef}>
          <h2
            className={`${isVisible ? "slide-up" : ""} text-sm mt-10  tracking-widest uppercase text-gray-500 dark:text-white sm:text-lg md:text-[16px]`}
          >
            Our values
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10">
            <div className="max-w-lg sm:max-w-2xl">
              <h4
                className={`${isVisible ? "slide-right" : ""} text-primary font-normal text-xl sm:text-2xl  md:text-4xl py-5 `}
              >
                We believe in smart and strategic growth and we think globally.
                We are investing in our ecosystem, including building a
                nearshoring network of sourcing solutions in the Western
                Hemisphere.
              </h4>
              <h4
                className={`${isVisible ? "slide-left" : ""} text-primary font-normal text-xl sm:text-2xl  md:text-4xl py-5`}
              >
                Our values inform all aspects of our business, from a
                committment to renewable energy to our pioneering development of
                sustainable materials and processes to our pledge to be a Net
                Zero enterprise by 2040.
              </h4>
            </div>
            <div className="max-w-2xl">
              <h4 className={`${isVisible ? "zoom-in" : ""} text-primary font-normal text-xl sm:text-2xl  md:text-4xl py-5`}>
                We have a large, global workforce and we are committing to
                maintaining a safe, inclusive and respectful workplace where all
                our employees are valued and respected. That includes empowering
                women, promoting equality and investing in our future by taking
                action to combat climate change.
              </h4>
            </div>
          </div>
          <div className={`flex justify-end ${isVisible ? "slide-up" : ""} `}>
            <Button theme="primary" label="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
