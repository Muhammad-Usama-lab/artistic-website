"use client";

import styles from "@/styles/hero.module.css";
import { useRef } from "react";
import Typist from "../Typist";

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <>
      <section
        id="home"
        className={`relative min-h-screen flex z-10 overflow-hidden bg-white pb-16 pt-[200px] dark:bg-gray-dark md:pb-[200px] md:pt-[250px] xl:pb-[350px] xl:pt-[400px] 2xl:pb-[20px] 2xl:pt-[600px]`}
      >
        <div className="container-full">
          <div className="mx-4 flex flex-wrap">
            <div className="max-w-8xl px-2 sm:px-10">
              <div className="mx-auto">
                <h1
                  className={`header-title uppercase mb-5 text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-white dark:text-white ${styles.heroText}`}
                >
                  The Future of <Typist />
                  <br />
                  is Global
                </h1>

                {/* <p
                  className={`${fadeOut ? "slide-out" : ""} ${isVisible ? "slide-left" : ""} mb-12  text-2xl  lg:text-4xl !leading-relaxed text-white dark:text-body-color-dark `}
                >
                  As the world's leading manufacturer of denim and apparel,
                  <br /> we strive for excellence in all we do.
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/*
         */}

        <div className="absolute right-0 top-0 bottom-0 left-0 z-[-1]  lg:opacity-100">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            src="/images/hero/video.mp4"
            className="mx-auto w-full mt-36 md:mt-0 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
          />
          {/* <Image
            src="/images/hero/banner.jpeg"
            alt="about-image"
            fill
            className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
