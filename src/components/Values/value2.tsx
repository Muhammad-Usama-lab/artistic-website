"use client";

import { useInView } from "react-intersection-observer";
import Button from "../Button";

const OurValues2 = () => {
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
          <div className="max-w-4xl mt-16">
            <h4
              className={`${isVisible ? "fade-in" : ""} text-justify text-primary font-normal text-xl sm:text-2xl  md:text-4xl py-5`}
            >
              Our values inform all aspects of our business, from a committment
              to renewable energy to our pioneering development of sustainable
              materials and processes to our pledge to be a Net Zero enterprise
              by 2040.
            </h4>
          </div>

          <div className={`flex justify-end ${isVisible ? "slide-up" : ""} `}>
            <Button theme="primary" label="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues2;
