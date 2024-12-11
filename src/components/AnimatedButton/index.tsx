"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/features.module.css";

const AnimatedButton = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the button is visible
    triggerOnce: false, // Run only once
  });

  return (
    <div ref={ref}>
      <button className={styles["animated-button"]}>
        <svg
          width="140"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["button-border"]}
        >
          <rect
            x="1"
            y="1"
            width="138"
            height="48"
            fill="none"
            stroke="#000"
            stroke-width="2"
            className={inView ? styles["rect-visible"] : ""}
          />
        </svg>
        <span>LEARN MORE →</span>
      </button>
    </div>
  );
};

export default AnimatedButton;
