"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/newspost.module.css";
function News3() {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="features"
      ref={ref}
      className={`min-h-screen py-16 px-8 md:py-30 lg:py-32 ${styles.postPage}`}
    >
      <div className="flex justify-center w-full">
        <h1
          className={`${
            isVisible ? "fade-in" : ""
          } text-center uppercase max-w-5xl primary-font mt-10 md:mt-0 text-2xl md:text-3xl xl:text-5xl sm:p-4`}
        >
          Artistic Milliners Joins Forces with SFI and The LYCRA Company to
          Revolutionize Denim with LYCRA FitSense® Technology
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mt-8">
        <p>
          KARACHI, PAKISTAN – APRIL 10, 2025 – Artistic Milliners is proud to
          announce its pivotal role in an exciting new partnership bringing
          LYCRA FitSense® denim technology to the Western Hemisphere. This
          collaboration, alongside Star Fades International (SFI), a leader in
          premium denim innovation, and The LYCRA Company, a global pioneer in
          fiber and fabric technology, marks a significant step forward in
          providing innovative and high-performance denim solutions.
        </p>

        <p>
          As a key partner, Artistic Milliners Mexico will be instrumental in
          bringing this patented technology closer to brands and consumers,
          enabling faster production, greater flexibility, and improved supply
          chain agility in the region. This initiative underscores our shared
          commitment to empowering brands with sustainable, cutting-edge denim
          solutions while simultaneously reducing lead times and enhancing
          regional manufacturing capabilities.
        </p>

        <p>
          The demand for jeans that offer an unparalleled combination of
          comfort, style, and body-inclusive shaping is on the rise. Recognizing
          this, Artistic Milliners, SFI, and The LYCRA Company seized the
          opportunity to integrate advanced fiber technology with premium denim
          craftsmanship right here in the Western Hemisphere. This partnership
          equips brands with the necessary tools to deliver exceptional,
          trend-driven denim garments that boast a next-level fit and feel, all
          while bolstering local manufacturing and simplifying the supply chain.
        </p>

        <p>
          LYCRA FitSense® denim technology represents a revolutionary
          advancement for denim. This unique innovation provides targeted
          support and shaping in key areas, ensuring unrestricted movement and
          superior comfort. The result is a garment that not only looks
          fantastic but also offers an exceptional wearing experience, adapting
          seamlessly to the body for a truly personalized fit.
        </p>

        <p className="font-medium">
          Key benefits of FitSense™ technology include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Patented yarn and garment processing technology</li>
          <li>
            A breakthrough approach to delivering a customizable fit and shaping
            solution to denim
          </li>
          <li>
            Durable shape and fit retention that targets areas such as tummy,
            thigh, butt, leg, and waist
          </li>
          <li>
            Invisible targeted shaping to make every pair of jeans feel like a
            perfect fit, for all body types and shapes
          </li>
        </ul>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
          "We are thrilled to partner with The LYCRA Company to bring LYCRA
          FitSense® denim technology to the Western Hemisphere. This
          collaboration delivers speed, flexibility, and innovation to our brand
          partners" — Murtaza Ahmed, Co-Founder, SFI & Director, Artistic
          Milliners
        </blockquote>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
          "Our collaboration with SFI and AM Mexico allows us to meet the
          evolving needs of consumers who demand both style and comfort while
          supporting regional manufacturing and sustainable supply chains" —
          Geoffrey Hietpas, VP Apparel, Americas, The LYCRA Company
        </blockquote>

        <p>
          Commercial availability for products featuring LYCRA FitSense® denim
          technology is expected for the Spring/Summer 2026 season. A special
          capsule collection will make its debut at Kingpins Amsterdam in April
          2025.
        </p>

        {/* Image at the end */}
        <div className="mt-10">
          <Image
            src="/images/newsposts/3.1.png"
            alt="Artistic Milliners LYCRA FitSense Launch"
            width={1000}
            height={600}
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default News3;
