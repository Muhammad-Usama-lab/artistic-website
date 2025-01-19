"use client";

import sStyles from "@/styles/slider.module.css";
import styles from "@/styles/about.module.css";

import { useInView } from "react-intersection-observer";

const Features = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // const quantity = 4;
  return (
    <>
      <section
        ref={ref}
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container px-4">
          <div className="p-4 mt-5 xl:mt-0 grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="">
              <h1
                className={`${isVisible ? "slide-left" : ""} text-xl md:text-6xl uppercase ${styles.heading}`}
              >
                About us
              </h1>
              <h5
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              >
                Artistic Milliners is building the global business conglomerate
                of the future.
              </h5>
              <h5
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-justify max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              >
                Our company has expanded from its roots in textiles to include
                renewable energy, while producing world-class denim fabrics and
                garments, as well as wovens and piece dyed fabrics. We have
                grown from our home in Pakistan to include sourcing operations
                in the Western Hemisphere and offices across the globe.
              </h5>
              <h5
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-justify max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              >
                We take a holistic approach to our business and have grown our
                ecosystem to encompass the entire apparel value chain — from
                field to fabric to manufacturing and finishing — as well as
                harnessing wind and solar energy to power our operations and a
                circular approach to the materials we use.
              </h5>

              <h5
                className={`${isVisible ? "slide-up" : ""} max-w-full xl:max-w-3xl text-justify max-w-3xl text-sm sm:text-xl my-4 ${styles.para}`}
              >
                Our vision of a successful future is one that is responsible,
                equitable, and sustainable for people, for the planet, and for
                our business. Over the years, we have been putting in place
                practices and policies that further these efforts, but we
                recognize that this journey requires a steady pace.
              </h5>
            </div>
            <div className="flex">
              <div
                className={`${isVisible ? "fade-in" : ""} md:h-full md:justify-center sm:justify-default `}
              >
                <img
                  key={"about image"}
                  src={`/images/about/1.jpg`}
                  alt="about-image"
                  width={400}
                  height={600}
                  className={`grow w-full h-full border drop-shadow-three dark:drop-shadow-none ${sStyles.image}`}
                />

                {/* <Carousel
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  className={styles.carouselContainer}
                >
                  {Array(quantity)
                    .fill(0)
                    ?.map((val, i) => (
                      <img
                        key={"any" + i}
                        src={`/images/about/${i + 1}.jpg`}
                        alt="about-image"
                        width={400}
                        height={600}
                        className={`grow w-full h-full border drop-shadow-three dark:drop-shadow-none ${styles.image}`}
                      />
                    ))}
                </Carousel> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
