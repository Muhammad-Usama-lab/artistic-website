"use client";

import { useInView } from "react-intersection-observer";

const Collage = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const data = [
    {
      title: "55% of women",
      desc: "in senior leadership positions",
      class: "max-w-56 text-primary",
      descriptionClass: "text-primary",
    },
    {
      title: "7,954 workers",
      desc: "fair trade-certified",
      class: "max-w-56 text-primary",
      descriptionClass: "text-primary",
    },
    {
      title: "252 million gallons of water",
      desc: "saved by recycling/reusing water in production",
      class: "max-w-96 text-gray-200",
      mainClass: "bg-[#263A90]",
      descriptionClass: "text-gray-200",
    },
  ];

  const data2 = [
    {
      title: "1,262 billion watt-hours of green energy",
      desc: "supplied to the national grid through wind production",
      class: "max-w-xl pt-10 text-gray-200",
      mainClass: "bg-[#263A90]",
      descriptionClass: "text-gray-200",
    },
    {
      title: "220,000 tonnes GHG Emissions Mitigated",
      desc: "through wind and solar",
      class: "max-w-xl text-primary",
      descriptionClass: "text-primary",
    },
  ];
  
  return (
    <>
      <section
        ref={ref}
        id="collage"
        className="min-h-screen  py-16 md:py-30 lg:py-28"
      >
        <div>
          <h1
            className={`${isVisible ? "fade-in" : ""} uppercase max-w-8xl mt-5 primary-font text-2xl sm:text-3xl md:text-4xl xl:text-5xl  p-4 sm:p-4 border-black border-t border-b-1`}
          >
            AM BY THE NUMBERS
          </h1>

          <div className="grid grid-cols-1  md:grid-cols-3">
            {data?.map((val, index) => (
              <div
                key={index + val?.title}
                className={`${isVisible ? "slide-left" : ""} border-black border-t lg:border flex flex-col items-center justify-center py-8 ${val?.mainClass}`}
              >
                <h1
                  className={`uppercase ${val?.class} text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl`}
                >
                  {val?.title}
                </h1>
                <h5
                  className={`${val?.descriptionClass} uppercase max-w-52 lg:max-w-xs text-center  text-sm sm:text-xl sm:p-4 mb-4`}
                >
                  {val?.desc}
                </h5>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2">
            {data2?.map((val, index) => (
              <div
                key={index + val?.title}
                className={`${isVisible ? "slide-right" : ""} ${val?.mainClass} border-black border-t lg:border flex flex-col items-center justify-center py-8`}
              >
                <h1
                  className={`uppercase ${val?.class} text-center  text-2xl sm:text-3xl md:text-4xl xl:text-5xl`}
                >
                  {val?.title}
                </h1>
                <h5
                  className={`${val?.descriptionClass} uppercase max-w-xs text-center text-sm sm:text-xl sm:p-4 mb-4`}
                >
                  {val?.desc}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collage;
