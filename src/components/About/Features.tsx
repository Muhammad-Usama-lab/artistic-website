"use client";

import { useInView } from "react-intersection-observer";
import GridComponent from "../Common/GridComponent";

const Features = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const data = [
    {
      title: "About us",
      content: [
        `Artistic Milliners is building the global business conglomerate of the future.`,
        `Our company has expanded from its roots in textiles to include renewable energy, while producing world-class denim fabrics and garments, as well as wovens and piece dyed fabrics. We have grown from our home in Pakistan to include sourcing operations in the Western Hemisphere and offices across the globe.`,
        `We take a holistic approach to our business and have grown our ecosystem to encompass the entire apparel value chain — from harnessing wind and solar energy to power our operations and a circular approach to the materials we use.`,
      ],
      image: "/images/about/1.png",
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        {data?.map((value, index) => (
          <GridComponent
            
            key={index + value?.title}
            title={value?.title}
            content={value?.content}
            image={value?.image}
          />
        ))}
      </section>
    </>
  );
};

export default Features;
