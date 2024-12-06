"use client";

import { useEffect, useState } from "react";

function Typist() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const words = ["ENERGY", "SUSTAINABILITY", "COTTON", "SPINNING", "DENIM", "APPAREL", "RECYCLING"];
  const durations = [3000, 6000, 4000, 7000, 10000, 13000, 10000]; // Durations in milliseconds

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
      style={{ color: "#112E9D" }}
    >
      {words[index]}
    </span>
  );
}

export default Typist;
