"use client";

import styles from "@/styles/newspost.module.css";

import { useInView } from "react-intersection-observer";

function News1() {
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
      <div className=" flex justify-center">
        <h1
          className={`${isVisible ? "fade-in" : ""} max-w-4xl  uppercase primary-font mt-10 md:mt-0 text-2xl md:text-3xl xl:text-5xl sm:pt-4 `}
        >
          AM Mexico, Artistic Milliners' Newest Western Hemisphere Facility,
          Begins Production
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 my-14">
        <p className="">
          LOS ANGELES | June 12, 2025 | Artistic Milliners, a global leader in
          denim manufacturing, has begun production out of AM Mexico, its newest
          division and state-of-the-art denim production facility in Parras,
          Mexico.
        </p>

        <p>
          Yaqoob Ahmed, Chairman, Omer Ahmed, Managing Director, and Murtaza
          Ahmed, Chief Executive Officer of Artistic Milliners were on hand to
          mark the occasion on May 26, 2025. They were joined by key Artistic
          Milliners leadership figures including Sujeewa Imbulgoda, Managing
          Director of AM Mexico, Guillermo Riddle, General Manager Operations of
          AM Mexico, as well as strategic partners Steve Maggard, President of
          Cone Denim, and Cesar Albarran, Plant Manager of Cone Denim Parras.
        </p>

        <p>
          The launch of production at AM Mexico marks a significant milestone in
          Artistic Milliners' journey of innovation and Western Hemisphere
          expansion. The facility specializes in producing and washing jeans,
          catering to both existing and new global customers. And it is already
          bringing an unmatched level of innovation and service to North
          American customers. In April of this year, AM Mexico and Los
          Angeles-based sister company Star Fades International (SFI) announced
          a partnership with The LYCRA Company to offer LYCRA FitSense® denim
          technology for the first time in North America.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic">
          "The opening of AM Mexico is the culmination of years of investments
          and commitments to Artistic Milliners' customers, who from day one
          supported our vision to offer them multi- country / multi-category
          products," said Murtaza Ahmed, Chief Executive Officer at Artistic
          Milliners. "They now have a denim factory in this hemisphere that
          meets and exceeds their expectation for product creation and
          automation."
        </blockquote>

        <p>
          AM Mexico is situated on a 10-acre site, featuring a
          150,000-square-foot production floor. The facility, acquired in 2024
          from VF Corp.'s Dickies de Parras S. de RL de CV, has undergone
          significant upgrades.
        </p>

        <p>
          The facility joins Artistic Milliners' global ecosystem and its
          growing Western Hemisphere network, which includes SFI and Star Fades
          Studios in the United States, its SFI factory in Guatemala and
          strategic partners such as Cone Denim, which also has a factory in
          Parras.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic">
          "By tapping into Artistic Milliners' Western Hemisphere network, our
          brand partners can accelerate their development and production
          timelines," said Omer Ahmed, Artistic Milliners' Managing Director.
          "AM Mexico will shave up to 13 weeks off of delivery timelines - and
          it also unlocks the benefits of reduced risk and supply chain
          resilience."
        </blockquote>

        <p>
          This expansion underscores Artistic Milliners' commitment to
          delivering exceptional denim solutions through innovation,
          sustainability, and customer-centric operations.
        </p>

        <h2 className="text-3xl font-bold mt-7 mb-4">
          Facility Highlights & Strategic Advantages
        </h2>

        <h3 className="text-2xl font-semibold mb-2">Proximity to Market</h3>
        <p className="mb-6">
          Strategically located near the U.S. border, AM Mexico enables reduced
          shipping times and costs compared to overseas sourcing. Its close
          proximity to major transportation hubs—Torreon and Saltillo—ensures
          smooth logistics and accessibility.
        </p>

        <h3 className="text-2xl font-semibold mb-2">
          State-of-the-Art Technology
        </h3>
        <p className="mb-6">
          AM Mexico features cutting-edge automation across cutting, sewing,
          finishing and laundry operations, delivering unmatched efficiency,
          precision, and consistent quality. The facility integrates machinery
          and technology from leaders such as Lectra, Jeanologia, Tonello, C
          Tex, IMA, Morgan, Tajima, Hashima, Sip-Italy, Smart MRT and Triveneta.
        </p>
        {images?.map((v) => (
          <img src={`/images/newsposts/1.${v}.png`} alt="article image" />
        ))}
      </div>
    </section>
  );
}

export default News1;
