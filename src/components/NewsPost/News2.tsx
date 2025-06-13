"use client";

import React from "react";
import styles from "@/styles/newspost.module.css";

import { useInView } from "react-intersection-observer";
function News2() {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const images = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section
      id="features"
      ref={ref}
      className={`min-h-screen py-16 px-8 md:py-30 lg:py-32 ${styles.postPage}`}
    >
      <div className="flex justify-center w-full ">
        <h1
          className={`${isVisible ? "fade-in" : ""} max-w-4xl   uppercase primary-font mt-10 md:mt-0 text-2xl md:text-3xl xl:text-5xl sm:pt-4`}
        >
          Sowing Seeds of Change: Empowering Women and Transforming Cotton
          Farming
        </h1>
      </div>

      <div className="max-w-4xl  mx-auto space-y-6 my-14">
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
          <a
            className="text-blue-500 underline"
            target="_blank"
            href="https://bit.ly/3FzoQoo"
          >
            https://bit.ly/3FzoQoo
          </a>
        </p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> */}
          {[1, 2, 3].map((v) => (
            <div
              key={v}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow"
            >
              <img
                src={`/images/newsposts/2.${v}.jpg`}
                alt={`News image ${v}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        {/* </div> */}
      </div>

   
    </section>
  );
}

export default News2;
