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
            AM Mexico, Artistic Milliners’ Newest Western Hemisphere Facility,
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
            <a
              href="/Yess-Certificate-AM.pdf"
              download
              className={`flex items-center max-w-40 sm:max-w-52 gap-x-1 uppercase border-2 border-black hover:bg-gray-100 dark:border-gray-300 rounded-full px-4 sm:px-10 py-1 sm:py-3 text-sm font-semibold`}
            >
              Learn more
              <div>
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between border-black p-8"></div>
      </div>
    </>
  );
};

export default Latest;
