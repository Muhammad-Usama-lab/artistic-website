"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ArrowButton from "../Button/ArrowButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = ({
  title,
  paragraph,
  folder,
  _class,
  quantity = 4,
}: {
  title: string;
  paragraph: string[];
  _class: string;
  folder?: string;
  quantity?: number;
}) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section
        ref={inViewRef}
        className="min-h-screen flex py-16 md:py-20 lg:py-40"
      >
        <div className="container flex">
          <div className="flex-col grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 border-2 border-black dark:border-gray-300">
            <div className="lg:border-r-2 md:border-b-2 py-5 px-10 border-black dark:border-gray-300 flex flex-col">
              <div className="flex-none">
                <h2
                  className={`${isVisible ? "slide-left" : ""} text-sm tracking-widest text-gray-500 dark:text-white sm:text-4xl md:text-[13px]`}
                >
                  {title}
                </h2>
              </div>
              <div className="pt-5 grow">
                {paragraph?.map((v) => (
                  <p
                    className={`${isVisible ? "slide-up" : ""} !leading-relaxed text-black dark:text-gray-300 md:text-2xl py-0 font-medium`}
                  >
                    {v}
                  </p>
                ))}
              </div>
              <div className="flex-none">
                <h2
                  className={`text-sm tracking-widest text-gray-500 dark:text-white sm:text-4xl md:text-[13px]`}
                >
                  IMAGES
                </h2>
                <div className="flex gap-2">
                  <ArrowButton onClick={null} />
                  <ArrowButton right={true} onClick={null} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="h-full flex flex-col">
                <Carousel
                  className="grow"
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                >
                  {Array(quantity)
                    .fill(0)
                    ?.map((val, i) => (
                      <div key={"any" + i}>
                        <Image
                          src={`/images/section/${folder}/${i + 1}.jpg`}
                          alt="about-image"
                          width={400}
                          height={400}
                          className="w-full h-full drop-shadow-three dark:drop-shadow-none"
                        />
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
