"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/scroll.module.css";
const details = [
  {
    title: "Apparels",
    content: [
      `Artistic Milliners is proud to be a trailblazer in sustainable apparel manufacturing. We are the first in Pakistan to achieve both LEED Gold and LEED Platinum certifications for our state-of-the-art facilities. Our flagship Unit-15, a LEED Platinum-certified industrial complex, exemplifies our dedication to environmental stewardship. Through innovative design and advanced technologies, we have significantly reduced our environmental footprint, achieving a 50% reduction in water usage, alongside substantial improvements in carbon emissions, energy efficiency, and waste reduction.`,
    ],
  },
  {
    title: "Denim Fabrics",
    content: [
      "Artistic Milliners can produce up to 108 million meters of denim fabrics , many of which incorporate sustainable, recycled, and biodegradable elements like recycled PIW and PCW cotton, hemp, Tencel™, LYCRA® EcoMade, and ROICA™ biodegradable elastane.  Our  fabrics division is committed to the circular model of business, utilizing technologies such as Crystal Clear 3.0 indigo dye technology, a water and salt-free dyeing process, G2 Dynamic ozone technology, and Nature's Coating's BioBlack TX, a carbon-negative pigment made from wood waste.  It is precisely this ethos which enabled us to collaborate with brand and supply chain partners to develop, Dylan, the world’s first  denim products that met Cradle-to-Cradle Institute Gold Standard. ",
    ],
  },
  {
    title: "Premium Wovens",
    content: [
      "Artistic Milliners expanded beyond denim in 2022 with the opening of Artmill, a cutting-edge finishing facility that produces piece-dyed fabrics and denim hybrids, activewear, and workwear. With a focus on woven fabrics for piece dyeing and garment dye, Artmill can produce 25 million meters of fabric and up to 6 million garments annually. The company is now the regions first first LEED Platinum- certified piece-dye mil, with power provided by renewable energy and water and chemical recycling methods in place. Mill offerings include VAT, reactive disperse dyeing, and chemical and mechanical finishes. Artmill is designed from the ground up to offer retailers and brands a turnkey solution for their activewear, workwear, and casualwear programs.",
    ],
  },

  {
    title: "Spinning",
    content: [
      "Our spinning division is a global leader in the production of sustainable and innovative yarns. We produce 8.2 million pounds of world-class cotton yarn monthly, with a diverse product portfolio that includes recycled cotton, organic cotton, BCI cotton, and smart fibers such as Tencel™, Recycled Poly, Creora, Circulose®, LYCRA® EcoMade, Thermolite®, and COOLMAX®.",
      "The division also houses our dedicated fiber recycling facility, Circular Park. This facility consolidates our internal textile waste streams and post-consumer waste, diverting it from landfills and reintroducing it into the production cycle. Developed in partnership with French machinery specialist La Roche, the 70,000-square-foot facility is equipped with cutting-edge, precision-controlled sorting and automated shredding machines.",
    ],
  },

  {
    title: "Renewable Energy",
    content: [
      "Artistic Milliners is a pioneer in renewable energy within Pakistan. Our state-of-the-art wind farms, with an operational capacity of 100 MW are a testament to our commitment to sustainability.  Currently, our wind farms power 144,500 households through Pakistan's national grid, supplying over 1.3 billion kWh of green energy.",
      "Our manufacturing facilities also utilize over 12 MW of solar power, further reducing our reliance on traditional energy sources. We are developing new renewable energy projects across Pakistan to promote a shift away from fossil fuels, reduce carbon emissions, and lower energy generation costs. In 2023 alone, we mitigated over 670,000 tonnes of GHG emissions.",
    ],
  },

  // {
  //   title: "Garments & Finishing",
  //   content:
  //     "This involves the final stages of textile production, including washing, dyeing, printing, and other processes to ensure the garments are ready for end-use. It focuses on enhancing aesthetics, durability, and functionality.",
  // },
  // {
  //   title: "Yarns, Fabrics, Dyes and Finishing",
  //   content:
  //     "This category encompasses the production and processing of yarns and fabrics, as well as the application of dyes and finishing techniques. These are crucial for achieving desired textures, colors, and qualities in textiles.",
  // },
  // {
  //   title: "Spinning and Fabric",
  //   content:
  //     "Spinning is the process of converting fibers into yarn, which is then woven or knitted into fabric. This step is vital for ensuring the quality and consistency of the final textile product.",
  // },
  // {
  //   title: "Artmill",
  //   content:
  //     "Artmill represents a creative approach to textile and apparel design, often integrating innovative techniques, sustainable practices, and artistic elements into the manufacturing process.",
  // },
  // {
  //   title: "Circular Park",
  //   content:
  //     "Circular Park emphasizes circular economy principles, focusing on recycling, reusing, and reducing waste within the textile and apparel industry to create a sustainable production cycle.",
  // },
  // {
  //   title: "Milliners Organic and Milliners Cotton Initiative",
  //   content:
  //     "This initiative promotes the use of organic cotton and sustainable farming practices, supporting eco-friendly production while ensuring high-quality materials for the textile industry.",
  // },
  // {
  //   title: "Smart Farming & Regenerative Agriculture",
  //   content:
  //     "Smart farming integrates technology to improve agricultural efficiency, while regenerative agriculture focuses on restoring soil health and biodiversity, both critical for sustainable textile raw materials.",
  // },
  // {
  //   title: "Western Hemisphere",
  //   content:
  //     "The Western Hemisphere plays a significant role in the global textile industry, offering a blend of traditional craftsmanship and modern technology, alongside significant contributions to sustainable practices.",
  // },
];
const points = details?.map((v) => v?.title);

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
    <div
      className={`flex xl:border-t xl:border-b xl:border-black px-5 md:px-20 ${styles.scrollComponent}`}
    >
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
        {details?.map((detail, index) => (
          <div
            key={index}
            ref={(el) => (detailRefs.current[index] = el)}
            className="mb-16"
          >
            <h2 className="mt-0 md:mt-5 text-2xl md:text-5xl uppercase font-regular mb-0 md:mb-4">
              {detail.title}
            </h2>
            {detail?.content?.map((val, index) => (
              <p
                className="text-lg md:text-2xl py-4 text-gray-700"
                key={val?.slice(3) + index}
              >
                {val}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
