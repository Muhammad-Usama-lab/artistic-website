"use client";

import styles from "@/styles/renewable-detailed.module.css";
import { useInView } from "react-intersection-observer";

const DetailComponent = ({ title, paragraph, image }) => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <section
      ref={ref}
      className="min-h-screen flex py-16 md:py-10 lg:py-20 items-center"
    >
      <div className="container">
        <div className="mt-5 flex-col grid grid-cols-12 ">
          <div className="xl:col-span-5 col-span-12  py-5 px-10 flex flex-col">
            <div className="flex-none">
              <h2
                className={`${isVisible ? "slide-left" : ""} sm:mt-4 xl:mt-8  tracking-widest uppercase dark:text-white font-bold sm:font-normal text-2xl sm:text-3xl md:text-4xl xl:text-5xl md:mb-14`}
              >
                {title}
              </h2>
            </div>
            <div className="pt-5 grow">
              {paragraph?.map((v) => (
                <p
                  className={`${isVisible ? "slide-up" : ""} py-2 !leading-relaxed text-black dark:text-gray-300 md:text-xl 2xl:text-2xl py-0`}
                >
                  {v}
                </p>
              ))}
            </div>
          </div>
          <div className="p-4 xl:col-span-7 col-span-12 ">
            <div
              className={`2xl:h-full flex flex-col md:justify-center sm:justify-default `}
            >
              <img
                src={image}
                alt="related-image"
                className={`grow w-full xl:h-full border ${styles.detailImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default DetailComponent;
