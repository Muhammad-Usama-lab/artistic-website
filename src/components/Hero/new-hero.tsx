"use client";
import styles from "@/styles/new-hero.module.css";
import { useEffect, useState } from "react";

const HeroSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false); // Hide text smoothly before image change
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        setTimeout(() => {
          setTextVisible(true);
        }, 2000); // Show text after 2s of image change
      }, 300); // Text hides 300ms before image changes
    }, 6200); // Total duration for one cycle: text out + image change + text in
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderInner}>
        {images?.map((image, index: number) => (
          <div
            key={index}
            className={`${styles.sliderItem} ${
              currentIndex === index ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${image?.image})`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.overlay}>
        <div
          className={`${styles.overlayText} ${
            textVisible ? styles.textVisible : styles.textHidden
          }`}
        >
          {/* <h1>{images[currentIndex]?.title}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
