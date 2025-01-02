"use client";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/values.module.css";

const Values = ({ text }) => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  return (
    <>
      <section
        id="values"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container px-4" ref={ref}>
          <h4
            className={`${isVisible ? "fade-in" : ""} mt-16 sm:mt-24   mb-16  text-primary font-normal text-xl sm:text-2xl  md:text-5xl ${styles.valueText}`}
          >
            {text}
          </h4>
        </div>
      </section>
    </>
  );
};

export default Values;
