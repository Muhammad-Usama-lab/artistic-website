"use client";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/grid-component.module.css";

interface GridComponentI {
  title: string;
  content: string[];
  image: string;
  html?: boolean;
}
const GridComponent = ({
  title,
  content,
  image,
  html = false,
}: GridComponentI) => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div className="container px-4" ref={ref}>
      <div className="p-4 mt-5 xl:mt-0 grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1
            className={`${isVisible ? "slide-left" : ""} uppercase ${styles.heading}`}
          >
            {title}
          </h1>
          {content?.map((val, index) =>
            html ? (
              <p
                dangerouslySetInnerHTML={{ __html: val }}
                key={index + val?.slice(10)}
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-justify max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              ></p>
            ) : (
              <h5
                key={index + val?.slice(10)}
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-justify max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              >
                {val}
              </h5>
            )
          )}
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`${isVisible ? "fade-in" : ""} md:h-full md:justify-center sm:justify-default `}
          >
            <img
              key={"about image"}
              src={image || `/images/about/1.png`}
              alt="about-image"
              width={400}
              height={600}
              className={`grow w-full h-full border drop-shadow-three dark:drop-shadow-none ${styles.image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
