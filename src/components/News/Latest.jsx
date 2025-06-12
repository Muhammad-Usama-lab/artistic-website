"use client";

import { useInView } from "react-intersection-observer";

import Button from "../Button";

const Latest = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 pt-8">
        <div className="flex flex-col justify-between border-black px-8 py-0">
          <h1 className={`max-w-xl font-bold text-lg md:text-2xl`}>
          AM Mexico, Artistic Milliners' Newest Western Hemisphere Facility,
          Begins Production
          </h1>
          <h5 className="max-w-3xl mt-8 text-sm sm:text-xl lg:text-2xl grow sm:mb-14">
            LOS ANGELES | June 12, 2025 | Artistic Milliners, a global leader in
            denim manufacturing, has begun production out of AM Mexico, its
            newest division and state-of-the-art denim production facility in
            Parras, Mexico.
            <br />
            Yaqoob Ahmed, Chairman, Omer Ahmed, Managing Director, and Murtaza
            Ahmed, Chief Executive Officer of Artistic Milliners were on hand to
            mark the occasion on May 26, 2025.
          </h5>

          <div className="flex justify-between items-center sm:mt-0">
            <div>
              <h6 className="text-sm sm:text-xl uppercase">news</h6>
              <h4 className="text-xl sm:text-5xl">24.02.25</h4>
            </div>
            <Button label="Learn More" goTo="/news/1" />
          </div>
        </div>
        <div className="flex flex-col justify-between border-black p-8"></div>
      </div>
    </>
  );
};

export default Latest;
