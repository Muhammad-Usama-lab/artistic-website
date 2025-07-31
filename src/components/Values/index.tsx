"use client";

import { useInView } from "react-intersection-observer";
import Button from "../Button";
import styles from "@/styles/values.module.css";

const OurValues = ({ data }) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <>
      <section id="our-values" className="min-h-screen py-16 md:py-15 lg:py-20">
        <div className="container px-10" ref={inViewRef}>
          <div className="max-w-7xl mt-16">
            <h2
              className={`${isVisible ? "slide-right" : ""} text-sm tracking-widest uppercase text-gray-500 dark:text-white sm:text-lg md:text-[16px]`}
            >
              Our values
            </h2>

            <h4
              className={`mt-16 sm:mt-24   mb-16  text-primary font-normal text-xl sm:text-2xl  md:text-5xl ${styles.valueText}`}
            >
              {data?.text.split('.').filter(s => s.trim()).map((sentence, i) => (
                <div key={i}>
                  <span
                    className={`${isVisible ? "animate-flip-in" : ""}`}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    {(sentence.trim() + '.')}
                  </span>
                </div>
              ))}
            </h4>
            <div
              className={`flex justify-end ${isVisible ? "slide-left" : ""} `}
            >
              <Button theme="primary" label="Learn More" goTo={data?.link}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
