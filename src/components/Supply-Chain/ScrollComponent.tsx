"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/scroll.module.css"
const points = [
  "Garments & Finishing",
  "Yarns, Fabrics, Dyes and Finishing",
  "LEED-Certified Apparel Facilities",
  "Spinning and Fabric",
  "Artmill",
  "Circular Park",
  "Milliners Organic and Milliners Cotton Initiative",
  "Smart Farming & Regenerative Agriculture",
  "Western Hemisphere",
];

const details = [
  {
    title: "Garments & Finishing",
    content:
      "This involves the final stages of textile production, including washing, dyeing, printing, and other processes to ensure the garments are ready for end-use. It focuses on enhancing aesthetics, durability, and functionality.",
  },
  {
    title: "Yarns, Fabrics, Dyes and Finishing",
    content:
      "This category encompasses the production and processing of yarns and fabrics, as well as the application of dyes and finishing techniques. These are crucial for achieving desired textures, colors, and qualities in textiles.",
  },
  {
    title: "LEED-Certified Apparel Facilities",
    content:
      "LEED-certified facilities are designed with sustainability in mind, emphasizing energy efficiency, reduced water consumption, and environmentally friendly practices in apparel production.",
  },
  {
    title: "Spinning and Fabric",
    content:
      "Spinning is the process of converting fibers into yarn, which is then woven or knitted into fabric. This step is vital for ensuring the quality and consistency of the final textile product.",
  },
  {
    title: "Artmill",
    content:
      "Artmill represents a creative approach to textile and apparel design, often integrating innovative techniques, sustainable practices, and artistic elements into the manufacturing process.",
  },
  {
    title: "Circular Park",
    content:
      "Circular Park emphasizes circular economy principles, focusing on recycling, reusing, and reducing waste within the textile and apparel industry to create a sustainable production cycle.",
  },
  {
    title: "Milliners Organic and Milliners Cotton Initiative",
    content:
      "This initiative promotes the use of organic cotton and sustainable farming practices, supporting eco-friendly production while ensuring high-quality materials for the textile industry.",
  },
  {
    title: "Smart Farming & Regenerative Agriculture",
    content:
      "Smart farming integrates technology to improve agricultural efficiency, while regenerative agriculture focuses on restoring soil health and biodiversity, both critical for sustainable textile raw materials.",
  },
  {
    title: "Western Hemisphere",
    content:
      "The Western Hemisphere plays a significant role in the global textile industry, offering a blend of traditional craftsmanship and modern technology, alongside significant contributions to sustainable practices.",
  },
];

const ScrollComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = detailRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.7 }
    );

    detailRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      detailRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleClick = (index) => {
    detailRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveIndex(index);
  };

  return (
    <div className={`flex xl:border-t xl:border-b xl:border-black px-5 md:px-20 ${styles.scrollComponent}`}>
      {/* Left Side - Points */}
      <div className="w-1/3 border-r border-black p-4 hidden md:block">
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className={`list-disc text-xl cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === index ? "font-bold text-black" : "text-gray-500"
              }`}
              onClick={() => handleClick(index)}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Details */}
      <div className="w-full p-2 pt-8 md:pt-0 xl:w-2/3 md:p-8 overflow-y-scroll scrollbar-hidden">
        {details.map((detail, index) => (
          <div
            key={index}
            ref={(el) => (detailRefs.current[index] = el)}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-5xl uppercase font-regular mb-0 md:mb-4">
              {detail.title}
            </h2>
            <p className="text-lg md:text-2xl py-8 text-gray-700">{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
