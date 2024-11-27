"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section
        id="home"
        className={`relative min-h-screen flex z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[400px] 2xl:pb-[20px] 2xl:pt-[550px]`}
      >
        <div className="container-full" ref={inViewRef}>
          <div className="mx-4 flex flex-wrap">
            <div className="max-w-7xl px-10">
              <div className="mx-auto ">
                <h1
                  className={`${isVisible ? "slide-up" : ""} header-title uppercase mb-5 text-4xl lg:text-8xl   font-normal leading-tight text-white dark:text-white`} //  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight
                >
                  The Future of Denim is Global
                </h1>
                <p
                  className={`${isVisible ? "slide-left" : ""} mb-12  text-2xl  lg:text-4xl !leading-relaxed text-white dark:text-body-color-dark `}
                >
                  As the world's leading manufacturer of denim and apparel,<br/> we
                  strive for excellence in all we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 left-0 z-[-1]  lg:opacity-100"> 
          {/* opacity-30 */}
          <Image
            src="/images/hero/banner.png"
            alt="about-image"
            fill
            className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
