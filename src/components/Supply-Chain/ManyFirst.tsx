"use client";

import Image from "next/image";
import React from "react";
import styles from "@/styles/manyfirst.module.css";


import { useInView } from "react-intersection-observer";
function ManyFirst() {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const firstCol = [
    {
      digit: "01",
      text: "Pakistan's first LEED Platinum Certified Apparel Business",
      image: "/images/business/1.jpg",
    },
    {
      digit: "02",
      text: "First PCW Cotton",
      image: "/images/business/2.jpg",
    },
    {
      digit: "03",
      text: "First Cradle to Cradle certified denim",
      image: "/images/business/3.jpg",
    },
  ];
  const secondCol = [
    {
      digit: "04",
      text: "Pakistan's First Fair Trade Certified Factory",
      image: "/images/business/4.jpg",
    },
    {
      digit: "05",
      text: "Founded Artistic Milliners Mexico",
      image: "/images/business/5.jpg",
    },
  ];

  return (
    <section ref={ref} id="many-first" className={`min-h-screen py-16 md:py-30 `}>
      <div className="p-10">
        <h1 className={`${isVisible ? "fade-in":""} max-w-8xl primary-font lg:text-6xl sm:text-6xl text-2xl md:pt-10 uppercase my-10 `}>
          THERE HAVE BEEN MANY FIRSTS...
        </h1>
        <div className={styles.manyRow}>
          <div className={`${styles.manyItem} ${isVisible ? "slide-up":""}`}>
            {firstCol?.map((value, index) => (
              <div
                key={index + "first-col"}
                className={`flex justify-between gap-10 border-t border-black py-3 ${index === firstCol.length - 1 ? "border-b" : ""} ${styles.innerWrap}`}
              >
                <div className={styles.part1}>
                  <div className="flex flex-col justify-center">
                    <h3 className="primary-font lg:text-6xl sm:text-6xl text-4xl ">
                      {value?.digit}
                    </h3>
                    <p className="text-xl">{value?.text}</p>
                  </div>
                </div>
                <div>
                  <Image
                    src={value?.image}
                    alt="about-image"
                    className={styles.manyFirstImage}
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.manyItem} ${isVisible ? "slide-left":""}` }>
            {secondCol?.map((value, index) => (
              <div key={index + "second-col"}>
                <div
                  className={`flex justify-between gap-10 border-t border-black py-3 ${index === secondCol?.length - 1 ? "border-b" : ""} ${styles.innerWrap}`}
                >
                  <div className="flex flex-col justify-center">
                    <h3 className="primary-font lg:text-6xl sm:text-6xl text-4xl ">
                      {value?.digit}
                    </h3>
                    <p className="text-xl">{value?.text}</p>
                  </div>
                  <div>
                    <Image
                      src={value?.image}
                      alt="about-image"
                      className={styles.manyFirstImage}
                      width={200}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManyFirst;
