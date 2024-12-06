"use client";

import { useEffect, useState } from "react";

function Typist() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // const words = ["Denim", "Energy", "Sustainability", "Traceability", "Cotton"];
  const words = [
    "Sustainability",
    "Traceability",
    "Sustainability",
    "Traceability",
    "Sustainability",
    "Traceability",
    "Sustainability",
    "Traceability",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1)); // Change word
        setFade(true); // Trigger fade-in
      }, 1000); // Match animation duration
    }, 3000); // Interval for word change

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span
      className={`text ${fade ? "cuboid-rotate-in" : "cuboid-rotate-out"}`}
      style={{ color: "#112E9D" }}
    >
      {words[index]}
    </span>
  );
}

export default Typist;
