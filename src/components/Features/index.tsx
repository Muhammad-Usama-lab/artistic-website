"use client";

import { useInView } from "react-intersection-observer";
import Button from "../Button";

const Features = () => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <>
      <section
        ref={inViewRef}
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container p-4">
          <h1
            className={` ${isVisible ? "slide-up" : ""} max-w-8xl primary-font text-4xl lg:text-7xl sm:text-6xl  sm:p-4 sm:pt-10 uppercase my-10 `} //
          >
            As the{" "}
            <span className={`text-primary ${isVisible ? "slide-left" : ""}`}>
              world's leading manufacturer of denim, PREMIUM WOVENS & PIECE DYED
              FABRICS and apparel,
            </span>{" "}
            we strive for excellence in all we do.
          </h1>
          <div className={`px-4 ${isVisible ? "slide-left" : ""}`}>
            <Button label="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
