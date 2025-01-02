"use client";

import styles from "@/styles/manyfirst.module.css";
import { useInView } from "react-intersection-observer";

const Global = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const data = [
    {
      title: "Pakistan",
      desc: [
        `Artistic Milliners (spinning, weaving, dyeing, garment manufacturing, and finishing)`,
        `Artmill`,
        `Circular Park`,
        `Milliners Organic and Milliners Cotton Initiative`,
        `Artistic Energy`,
      ],
      class: "max-w-56",
    },
    {
      title: "United States",
      desc: [`Star Fades International (SFI), Los Angeles`],
      class: "max-w-56",
    },
    {
      title: "Mexico",
      desc: [`Artistic Milliners Mexico`],
      class: "max-w-96",
    },
    {
      title: "Guatemala",
      desc: [`SFI-Guatemala`],
      class: "max-w-96",
    },
  ];

  const data2 = [
    {
      title: "Design and sales offices ",
      desc: [
        `SoHo Incubator, New York, USA`,
        `San Francisco, California, USA`,
        `Artistic Milliners Global FZCO, Dubai, U.A.E.`,
        `Barcelona, Spain`,
        `London, United Kingdom`,
      ],
      class: "max-w-xl pt-10",
    },
  ];
  return (
    <>
      <section
        ref={ref}
        id="Global"
        className="min-h-screen  py-16 md:py-30 lg:py-28"
      >
        <div className={isVisible ? "fade-in" : ""}>
          <h1 className="uppercase max-w-8xl mt-8 primary-font text-2xl sm:text-3xl md:text-4xl xl:text-6xl  p-2 sm:p-4 sm:px-6 sm:pt-8 border-black border-t border-b-1">
            We are Global
          </h1>

          <div className={styles.manyRow}>
            <div className={styles.manyItem}>
              {data?.map((val, index) => (
                <div
                  key={index + val?.title}
                  className="border-black border-t md:border-t-2 my-0 sm:my-3 p-5 sm:px-6"
                >
                  <h1 className="text-lg sm:text-3xl">{val?.title}</h1>
                  <h5 className="text-sm sm:text-xl my-2">
                    {val?.desc?.map((v) => (
                      <>
                        {v} <br />{" "}
                      </>
                    ))}
                  </h5>
                </div>
              ))}
            </div>
            <div className={styles.manyItem}>
              {data2?.map((val, index) => (
                <div
                  key={index + val?.title}
                  className="border-black border-t md:border-t-2 my-0 sm:my-3 p-5"
                >
                  <h1 className="text-lg sm:text-3xl">{val?.title}</h1>
                  <h5 className="text-sm sm:text-xl my-2">
                    {val?.desc?.map((v) => (
                      <>
                        {v} <br />{" "}
                      </>
                    ))}
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div
              className={`2xl:h-full flex flex-col md:justify-center sm:justify-default `}
            >
              <img
                src={`/images/section/row1/1.jpg`}
                alt="about-image"
                className={`grow w-full xl:h-full border ${styles.detailImage}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Global;
