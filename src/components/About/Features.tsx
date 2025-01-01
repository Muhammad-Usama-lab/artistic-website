"use client";

import { Carousel } from "react-responsive-carousel";
import styles from "@/styles/slider.module.css";

const Features = () => {
  const quantity = 4;
  return (
    <>
      <section
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container px-4">
          <div className="p-4  grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="">
              <h1 className="text-xl sm:text-7xl uppercase">About us</h1>
              <h5 className="max-w-full xl:max-w-3xl text-lg sm:text-2xl my-8">
                The Artistic Milliners portfolio of companies is a vertical
                ecosystem that strives for excellence in every facet of its
                operation.
              </h5>
              <h5 className="max-w-full xl:max-w-3xl text-justify max-w-3xl text-lg sm:text-2xl my-8">
                Artistic Milliners’ global footprint includes Star Fades
                International, the Los Angeles-based design, development and
                laundry facility; Artmill, a cutting-edge finishing facility for
                non-denim fabrics and garments; Circular Park, a 360-degree
                recycling facility; and Artistic Energy.
              </h5>
              <h5 className="max-w-full xl:max-w-3xl text-justify max-w-3xl text-lg sm:text-2xl my-8">
                AM web redesign 100% B12 As the preeminent vertical denim
                manufacturer in Pakistan, Artistic Milliners expanded its
                holdings to anticipate the needs of its international customer
                base of retailers and brands. With the opening of SFI in 2020,
                AM began building a nearshoring hub that stretches from the U.S.
                to Mexico and Central America, including strategic partnerships
                across the regions as well as wholly owned facilities.
              </h5>
            </div>
            <div className="flex">
              <div className={`h-full md:justify-center sm:justify-default `}>
                <Carousel
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
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
