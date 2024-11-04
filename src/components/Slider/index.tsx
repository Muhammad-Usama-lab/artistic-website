"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ArrowButton from "../Button/ArrowButton";

const Slider = ({
  title,
  paragraph,
  images = [
    "/images/section/row1/1.jpg",
    "/images/section/row2/1.jpg",
    "/images/section/row3/1.jpg",
    "/images/section/row4/1.jpg",
  ],
  _class,
}: {
  title: string;
  paragraph: string[];
  _class: string;
  images?: string[];
}) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section ref={inViewRef}>
        <div className="container">
          <div className="grid grid-cols-2 border-2 border-black dark:border-gray-300">
            <div className="border-r-2 py-5 px-10 border-black dark:border-gray-300 flex flex-col">
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
              <Image
                src={images[0]}
                alt="about-image"
                width={400}
                height={400}
                className="w-full h-full drop-shadow-three dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
