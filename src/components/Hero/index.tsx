"use client";

import styles from "@/styles/hero.module.css";
import { useEffect, useRef } from "react";
import Typist from "../Typist";
import { environment } from "@/mock";

const Hero = () => {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    if (environment === "production")
      document.addEventListener("contextmenu", disableRightClick);
    return () => {
      if (environment === "production")
        document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  const videoRef = useRef(null);

  const wordDurations = [3000, 6000, 5000, 8000, 12000, 15000, 10000];

  return (
    <>
      <section
        id="home"
        className={`relative min-h-screen flex z-10 overflow-hidden bg-white pb-16 pt-[300px] dark:bg-gray-dark sm:pt-[450px] md:pb-[200px] md:pt-[350px] xl:pb-[350px] xl:pt-[250px] 2xl:pb-[20px] 2xl:pt-[550px]`}
      >
        <div className="container-full">
          <div className="mx-4 flex flex-wrap">
            <div className="max-w-8xl px-2 sm:px-10">
              <div className="mx-auto">
                <h1
                  className={`header-title uppercase mb-5 text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-white dark:text-white ${styles.heroText}`}
                >
                  The Future of{" "}
                  <Typist videoRef={videoRef} wordDurations={wordDurations} />
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

        <div className="absolute right-0 top-0 bottom-0 left-0 z-[-1] lg:opacity-100 ">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src="/images/hero/video.mp4"
            className="mx-auto w-full mt-60 md:mt-0 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
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
