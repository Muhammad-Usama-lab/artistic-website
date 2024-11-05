"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArrowButton from "../Button/ArrowButton";

const Slider = ({
  title,
  paragraph,
  folder,

  quantity = 4,
}: {
  title: string;
  paragraph: string[];
  folder?: string;
  quantity?: number;
}) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const carouselRef = useRef<Carousel>(null);

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.onClickNext();
    }
  };

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.onClickPrev();
    }
  };

  return (
    <>
      <section
        ref={inViewRef}
        className="min-h-screen flex py-16 md:py-20 lg:py-40"
      >
        <div className="container-full p-4 flex">
          <div className="flex-col grid grid-cols-12 lg:grid-cols-12 border-2 border-black dark:border-gray-300">
            <div className="col-span-5 lg:border-r-2  md:border-b-2 py-5 px-10 border-black dark:border-gray-300 flex flex-col">
              
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
                  <ArrowButton onClick={goToPrev} />
                  <ArrowButton right={true} onClick={goToNext} />
                </div>
              </div>
            </div>
            <div className="p-4 col-span-7">
              <div className="h-full flex flex-col md:justify-center sm:justify-default">
                <Carousel
                  ref={carouselRef}
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
                      <Image
                        key={"any" + i}
                        src={`/images/section/${folder}/${i + 1}.jpg`}
                        alt="about-image"
                        width={400}
                        height={600}
                        className="grow w-full h-full border drop-shadow-three dark:drop-shadow-none"
                      />
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
