"use client";

import { useEffect, useState } from "react";

function Typist({ videoRef, wordDurations }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const words = [
    "ENERGY",
    "SUSTAINABILITY",
    "COTTON",
    "SPINNING",
    "DENIM",
    "APPAREL",
    "RECYCLING",
  ];
  const durations = [3000, 6000, 5000, 7000, 11000, 14000, 10000];

  useEffect(() => {
    const interval = setTimeout(() => {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1)); // Update index
        setFade(true); // Trigger fade-in
      }, 1000); // Fade-out duration
    }, durations[index]); // Dynamic interval based on current word's duration

    return () => {
      clearTimeout(interval); // Clear timeout to avoid memory leaks
    };
  }, [index]);

  return (
    <span
      className={`text ${fade ? "cuboid-rotate-in" : "cuboid-rotate-out"}`}
      style={{
        color: "#112E9D",
        display: "inline-block",
        fontWeight: "bold",
        backgroundColor: "#ffffff54",
        padding: "5px 4px",
        borderRadius: "4%",
      }}
    >
      {words[index]}
    </span>
  );
}

export default Typist;
// "use client";

// import styles from "@/styles/hero.module.css";

// import { useState, useEffect } from "react";

// function Typist({ videoRef, wordDurations }) {
//   const [index, setIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const words = [
//     "ENERGY",
//     "SUSTAINABILITY",
//     "COTTON",
//     "SPINNING",
//     "DENIM",
//     "APPAREL",
//     "RECYCLING",
//   ];
//   const cumulativeDurations = wordDurations.reduce(
//     (acc, duration, i) => [...acc, duration + (acc[i - 1] || 0)],
//     []
//   );

//   useEffect(() => {
//     if (!videoRef.current) return;

//     const syncWithVideo = () => {
//       const currentTime = videoRef.current.currentTime * 1000; // Convert to milliseconds
//       const cycleTime =
//         currentTime % cumulativeDurations[cumulativeDurations.length - 1]; // Cycle time

//       for (let i = 0; i < cumulativeDurations.length; i++) {
//         if (cycleTime < cumulativeDurations[i]) {
//           if (index !== i) {
//             setAnimating(true); // Trigger animation
//             setTimeout(() => setAnimating(false), 1000); // Match animation duration
//             setIndex(i);
//           }
//           break;
//         }
//       }
//     };

//     const interval = setInterval(syncWithVideo, 100); // Poll every 100ms

//     return () => clearInterval(interval);
//   }, [videoRef, cumulativeDurations, index]);

//   return (
//     <span
//       className={`${styles["transition-all"]} ${animating ? styles["animate-cuboid"] : ""}`}
//       style={{
//         color: "#112E9D",
//         display: "inline-block",
//         fontWeight: "bold",
//         backgroundColor: "#ffffff59",
//         padding: "5px 4px",
//         borderRadius: "4%",
//       }}
//     >
//       {words[index]}
//     </span>
//   );
// }

// export default Typist;
