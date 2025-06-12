"use client";

import React from "react";
import styles from "@/styles/newspost.module.css";

import { useInView } from "react-intersection-observer";
function News2() {
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
          className={`${isVisible ? "fade-in" : ""} text-center uppercase max-w-5xl primary-font mt-10 md:mt-0 text-2xl md:text-3xl xl:text-5xl sm:p-4`}
        >
          Sowing Seeds of Change: Empowering Women and Transforming Cotton
          Farming
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <p className="">
          Artistic Milliners, in partnership with the Centre of Excellence in
          Responsible Business (CERB) and the Pakistan Business Council, is
          driving significant change in rural Pakistan through the Milliner
          Cotton Initiative (MCI). This program is dedicated to empowering rural
          women and transforming cotton farming through sustainable practices.
        </p>

        <p>
          The MCI addresses systemic barriers faced by women in rural areas by
          introducing two key programs: the Alternate Livelihood Program (ALP)
          and Fields of Equity. The ALP equips women with skills in
          micro-enterprises like kitchen gardening, poultry farming, and bee-
          farming, creating new avenues for sustainable income, especially
          during non-farming seasons. For instance, Shahida Bibi's monthly
          income rose significantly through kitchen gardening, allowing her to
          invest in her children's education. Similarly, Zarina Bibi transformed
          her passion for sewing into a sustainable livelihood, contributing
          substantially to her family's income.
        </p>

        <p>
          Fields of Equity, active in both MCI and AM-Regen communities,
          provides training and tools for female farmers to actively participate
          in cotton farming—a traditionally male-dominated field. Participants
          learn modern farming techniques, including sustainable practices like
          improved soil management, integrated pest management, and
          water-efficient irrigation. Zahra Bibi, for example, cultivated a
          thriving cotton crop, diversified into goat farming, and repaid her
          loan, showcasing remarkable entrepreneurial spirit.
        </p>

        <p>
          This economic empowerment has directly led to greater respect and
          influence for women within their households, challenging traditional
          gender roles. Women like Noreen Akhtar, through her poultry business,
          gained the confidence to advocate for her children's education.
        </p>

        <p>
          The initiative also champions sustainability. A pilot in Rahim Yar
          Khan demonstrated significant environmental benefits: 14.3% fewer
          tillage operations, a 21.6% decrease in pesticide usage, and a 13.6%
          reduction in irrigation water usage. These practices led to increased
          cotton yield and a 32.8% reduction in overall farming costs, proving
          that sustainability and economic success go hand-in-hand.
        </p>

        <p>
          The Milliner Cotton Initiative presents a compelling business case for
          responsible practices, stabilizing supply chains and meeting rising
          demands for ethical sourcing. Artistic Milliners is committed to
          expanding these programs, ensuring long-term self-reliance for
          participants and continuing to inspire a more equitable and
          sustainable future for rural communities in Pakistan
        </p>

        <p>
          Read the full case study at{" "}
          <a className="text-blue-500 underline" href="https://bit.ly/3FzoQoo">
            https://bit.ly/3FzoQoo
          </a>{" "}
        </p>
      </div>

      {/* <div className="max-w-4xl mx-auto mt-8">

        <p className="mb-6">
          LOS ANGELES | June 12, 2025 | Artistic Milliners, a global leader in
          denim manufacturing, has begun production out of AM Mexico, its newest
          division and state-of-the-art denim production facility in Parras,
          Mexico.
        </p>

        <p className="mb-6">
          Yaqoob Ahmed, Chairman, Omer Ahmed, Managing Director, and Murtaza
          Ahmed, Chief Executive Officer of Artistic Milliners were on hand to
          mark the occasion on May 26, 2025. They were joined by key Artistic
          Milliners leadership figures including Sujeewa Imbulgoda, Managing
          Director of AM Mexico, Guillermo Riddle, General Manager Operations of
          AM Mexico, as well as strategic partners Steve Maggard, President of
          Cone Denim, and Cesar Albarran, Plant Manager of Cone Denim Parras.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
          Facility Highlights & Strategic Advantages
        </h2>

        <h3 className="font-semibold mb-2">Proximity to Market</h3>
        <p className="mb-6">
          Strategically located near the U.S. border, AM Mexico enables reduced
          shipping times and costs compared to overseas sourcing. Its close
          proximity to major transportation hubs—Torreon and Saltillo—ensures
          smooth logistics and accessibility.
        </p>

        <h3 className="font-semibold mb-2">State-of-the-Art Technology</h3>
        <p className="mb-6">
          AM Mexico features cutting-edge automation across cutting, sewing,
          finishing and laundry operations, delivering unmatched efficiency,
          precision, and consistent quality. The facility integrates machinery
          and technology from leaders such as Lectra, Jeanologia, Tonello, C
          Tex, IMA, Morgan, Tajima, Hashima, Sip-Italy, Smart MRT and Triveneta.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
          Sowing Seeds of Change: Empowering Women and Transforming Cotton
          Farming
        </h2>
        <p className="mb-6">
          Artistic Milliners, in partnership with the Centre of Excellence in
          Responsible Business (CERB) and the Pakistan Business Council, is
          driving significant change in rural Pakistan through the Milliner
          Cotton Initiative (MCI). This program is dedicated to empowering rural
          women and transforming cotton farming through sustainable practices.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
          Artistic Milliners Joins Forces with SFI and The LYCRA Company
        </h2>
        <p className="mb-6">
          KARACHI, PAKISTAN – APRIL 10, 2025 – Artistic Milliners is proud to
          announce its pivotal role in an exciting new partnership bringing
          LYCRA FitSense® denim technology to the Western Hemisphere. This
          collaboration, alongside Star Fades International (SFI), a leader in
          premium denim innovation, and The LYCRA Company, a global pioneer in
          fiber and fabric technology, marks a significant step forward in
          providing innovative and high-performance denim solutions.
        </p>

        <p className="mb-6">
          Key benefits of FitSense™ technology include:
          <ul className="list-disc pl-6 mt-2">
            <li>Patented yarn and garment processing technology</li>
            <li>
              A breakthrough approach to delivering a customizable fit and
              shaping solution to denim
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
        </p>
      </div> */}
    </section>
  );
}

export default News2;
