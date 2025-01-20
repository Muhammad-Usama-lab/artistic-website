"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/scroll.module.css";
const points = [
  "Equality And Opportunity",
  "Health And Wellness",
  "Little Milliners Day Care",
  "Empowerment Programs",
  "Fairtrade & Better Work",
  "Social Responsibility And Partnerships",
  "Gap P.A.C.E. (Personal Advancement And Career Enhancement) Program",
  "Levi Strauss & Co. Worker Wellbeing Program",
  "Literacy Program",
];

const details = [
  {
    title: "Equality And Opportunity",
    content: [
      `We believe in an equitable workforce and are committed to hire and provide opportunities for advancement across all genders. This includes recruiting and hiring women for senior leadership roles, as well as training women to hold roles traditionally filled by men such as dry processing, pressing, and the fire and safety departments.`,
      `Since 2018, we have been an official signatory of United Nations Women’s Empowerment Principles, which offer guidance to businesses about advancing gender equality and women’s empowerment in the workplace and in the community.`,
    ],
  },
  {
    title: "Health And Wellness",
    content: [
      `We have implemented gender-responsive health services for our workers, as well as guaranteed rights including providing breastfeeding facilities, maternal leave and surrogacy support. Our efforts to provide health and wellness benefits extend beyond our employees and into the communities where we operate. Those initiatives include providing new jobs, community schools, clean drinking water and medical services`,
    ],
  },
  {
    title: "Little Milliners Day Care",
    content: [
      "Artmill, our cutting-edge finishing facility, specializes in piece-dyed fabrics, denim hybrids, activewear, and workwear. Designed for optimal efficiency and sustainability, Artmill is the region's first LEED Platinum-certified piece-dye mill. Powered by renewable energy and employing advanced water and chemical recycling processes, Artmill represents the future of responsible textile finishing.",
    ],
  },

  {
    title: "EMPOWERMENT PROGRAMS",
    content: [
      `International Women’s Day  Health Awareness Camp and Children’s Day at Jhimpir HERessentials programs for health education and financial literacy  Milliners Organic Seed Bag Distribution  Earth Day Celebration: Cattle Distribution  Pakistan Flood Relief`,
    ],
  },
  {
    title: "FAIRTRADE & BETTER WORK",
    content: [
      `In 2019, Artistic Milliners became Pakistan’s first Fairtrade- certified, vertically integrated denim company. Fairtrade International is a global system founded to create resilient, transparent supply chains by ensuring safe and healthy working conditions, a sustainable livelihood for workers, and environmental protections through standards and certification processes. One of the worker benefits of Fairtrade is the Fairtrade Premium. A percentage of the product cost is given to a worker fund and dispersed to workers. The fund is managed by the workers, who vote on how the money will be distributed. To date, $2 million USD have been distributed to workers as a premium in the program.`,
      `The Better Work Organization is a collaboration between the United Nations’ International Labour Organization (ILO) and the World Bank Group’s International Finance Corporation (IFC). Founded to unite the garment supply chain in a mission to improve working conditions and bolster workers’ labor rights, Better Work acknowledges the garment industry’s role in lifting people out of poverty and the efforts of companies like Artistic Milliners to reduce environmental impacts, create safe and decent jobs and empower women. Artistic Milliners collaborated with Better Work in 2022 and the company was among the organization’s first partners in Pakistan. Currently, we are working with Better Work on a pilot program called “Building Respectful, Safe & Healthy Factory Floor.”`,
    ],
  },
  {
    title: "SOCIAL RESPONSIBILITY AND PARTNERSHIPS",
    content: [
      `Artistic Milliners works in collaboration with customers and international organizations on a number of worker empowerment programs, including:`,
    ],
  },
  {
    title: "GAP P.A.C.E. (Personal Advancement and Career Enhancement) Program",
    content: [
      `Run in collaboration with Gap Inc.. Artistic Milliners was the first company in Pakistan to join the project in 2015. The life skills training program educates women on communication, problem-solving, legal and financial literacy. To date, 80% of our female employees have completed the P.A.C.E. program.`,
    ],
  },
  {
    title: "Levi Strauss & Co. Worker Wellbeing Program",
    content: [
      `Artistic Milliners’ worker-friendly initiatives, such as charity funds, government-provided health insurance, free lunch, and transportation for work, fall under the Levi’s Worker Wellbeing Program. The company works with a Pakistan-based microfinance network to provide an experiential financial curriculum, including a financial literacy program on banking, insurance, asset diversification, investments, and savings.`,
    ],
  },
  {
    title: "Literacy Program",
    content: [
      `With support from the Levi Strauss Foundation, AM launched the Literacy Program in 2016 in collaboration with Literate Pakistan Foundation, a Pakistani literacy NGO founded to encourage literacy through educational programs applicable to all Pakistani society segments. In 2020, the company teamed up with The Citizens Foundation, a USA- based nonprofit that supports education for underprivileged children in Pakistan, to expand the program to more than 2,500 workers.`,
    ],
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
        {details.map((detail, index) => (
          <div
            key={index}
            ref={(el) => (detailRefs.current[index] = el)}
            className="mb-16"
          >
            <h2 className="mt-0 md:mt-5 text-2xl md:text-5xl uppercase font-regular mb-0 md:mb-4">
              {detail.title}
            </h2>
            {detail?.content?.map((con, index) => (
              <p key={index} className="text-lg md:text-2xl py-8 text-gray-700">
                {con}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
