"use client";
import { useInView } from "react-intersection-observer";


import TimelineComponent from "./TimelineComponent";

function Milestone() {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id="many-first"
      className={`min-h-screen py-10 md:py-30 `}
    >
      <div className="p-10">
        <h1
          className={`${isVisible ? "fade-in" : ""} uppercase max-w-5xl primary-font lg:text-7xl sm:text-6xl text-3xl sm:pt-10 uppercase my-10 `}
        >
          But there's more milestones to reach....
        </h1>
        <div className={isVisible ? "slide-right":""}>
          <TimelineComponent />
        </div>
      </div>
    </section>
  );
}

export default Milestone;
