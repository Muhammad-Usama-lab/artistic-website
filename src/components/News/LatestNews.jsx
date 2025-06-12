"use client";

import { useInView } from "react-intersection-observer";

import Button from "../Button";

const LatestNews = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section
        ref={ref}
        id="collage"
        className={`min-h-screen ${isVisible ? "fade-in" : ""} pt-28`}
      >
        <div className="grid h-full grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-between border-black border-t lg:border  p-8">
            <h1 className={`max-w-xl font-bold text-lg md:text-2xl`}>
              Sowing Seeds of Change: Empowering Women and Transforming Cotton
              Farming
            </h1>
            <h5 className="max-w-3xl mt-14 text-sm sm:text-xl lg:text-2xl grow sm:mb-14">
              Artistic Milliners, in partnership with the Centre of Excellence
              in Responsible Business (CERB) and the Pakistan Business Council,
              is driving significant change in rural Pakistan through the
              Milliner Cotton Initiative (MCI). This program is dedicated to
              empowering rural women and transforming cotton farming through
              sustainable practices.
              <br />
              The MCI addresses systemic barriers faced by women in rural areas
              by introducing two key programs: the Alternate Livelihood Program
              (ALP) and Fields of Equity.
            </h5>

            <div className="flex justify-between items-center mt-6 sm:mt-0">
              <div>
                <h6 className="text-sm sm:text-xl uppercase">news</h6>
                <h4 className="text-xl sm:text-5xl">24.02.25</h4>
              </div>
              <Button label="Learn More" goTo="/news/2" />
            </div>
          </div>
          <div className="flex flex-col justify-between border-black border-t border-b lg:border p-8">
            <h1 className={`max-w-2xl font-bold text-lg`}>
              Artistic Milliners Joins Forces with SFI and The LYCRA Company to
              Revolutionize Denim with LYCRA FitSense® Technology
            </h1>
            <h5 className="max-w-3xl mt-14 text-sm sm:text-xl lg:text-2xl grow sm:mb-14">
              KARACHI, PAKISTAN – APRIL 10, 2025 – Artistic Milliners is proud
              to announce its pivotal role in an exciting new partnership
              bringing LYCRA FitSense® denim technology to the Western
              Hemisphere. This collaboration, alongside Star Fades International
              (SFI), a leader in premium denim innovation, and The LYCRA
              Company, a global pioneer in fiber and fabric technology, marks a
              significant step forward in providing innovative and
              high-performance denim solutions.
              <br />
              As a key partner, Artistic Milliners Mexico will be instrumental
              in bringing this patented technology closer to brands and
              consumers, enabling faster production, greater flexibility, and
              improved supply chain agility in the region.
            </h5>
            <div className="flex justify-between items-center mt-6 sm:mt-0">
              <div>
                <h6 className="text-sm sm:text-xl uppercase">news</h6>
                <h4 className="text-xl sm:text-5xl">10.04.25</h4>
              </div>
              <Button label="Learn More" goTo="/news/3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
