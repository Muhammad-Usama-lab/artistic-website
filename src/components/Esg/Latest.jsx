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
      <section
        ref={ref}
        id="collage"
        className={`min-h-screen ${isVisible ? "fade-in" : ""} pt-14`}
      >
        <div className="mt-14">
          <div className="flex flex-col justify-end">
            <h1 className="uppercase primary-font text-2xl sm:text-3xl md:text-4xl xl:text-5xl px-4 py-2  sm:p-4  border-black border-t border-b-1">
              THE LATEST
            </h1>
          </div>
        </div>

        <div className="grid h-full grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-between border-black border-t lg:border  p-8">
            <h1 className={`max-w-xl font-bold text-lg md:text-2xl`}>
              Artistic Milliners Takes Major Step Towards YESS Certification
            </h1>
            <h5 className="max-w-3xl mt-14 text-sm sm:text-xl lg:text-2xl grow sm:mb-14">
              KARACHI, PAKISTAN – February 24, 2025 – Artistic Millinersis
              pleased to announce that it has been officially listed on the Yarn
              Ethically Sustainably Sourced (YESS) Assessment Portal. This
              significant milestone underscores the company's unwavering
              commitment to ethical and sustainable sourcing practices
              throughout its supply chain. The YESS certification is a globally
              recognized standard that ensures the responsible procurement of
              cotton and cotton-based products. By fulfilling all the necessary
              requirements, Artistic Milliners is on track to achieve full YESS
              certification, further solidifying its position as a responsible
              and sustainable industry leader.
            </h5>
            {/* <h5 className="my-4 text-sm sm:text-lg grow ">
                "We are thrilled to be listed on the YESS Assessment Portal and
                are diligently working towards obtaining the YESS
                certification," said Akbar Ali, Manager, Responsible Business
                Projects at Artistic Milliners. "This accomplishment reflects
                our dedication to responsible sourcing and our commitment to
                creating a positive impact on the communities we operate in."
              </h5>
              <h5 className="text-sm sm:text-lg grow mb-5">
                Artistic Milliners' commitment to YESS aligns with its broader
                sustainability strategy, which includes reducing its
                environmental footprint, promoting fair labor practices, and
                ensuring ethical sourcing throughout its supply chain. The
                company's YESS policy outlines its expectations for suppliers,
                including the avoidance of forced labor, fair working
                conditions, and adherence to industry standards.
              </h5> */}

            <div className="flex justify-between items-center mt-6 sm:mt-0">
              <div>
                <h6 className="text-sm sm:text-xl uppercase">news</h6>
                <h4 className="text-xl sm:text-5xl">24.02.25</h4>
              </div>
              <a
                href="/Yess-Certificate-AM.pdf"
                download
                className={`flex items-center max-w-40 sm:max-w-52 gap-x-1 uppercase border-2 border-black hover:bg-gray-100 dark:border-gray-300 rounded-full px-4 sm:px-10 py-1 sm:py-3 text-sm font-semibold`}
              >
                download
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
          <div className="flex flex-col justify-between border-black border-t border-b lg:border p-8">
            <h1 className={`max-w-2xl font-bold text-lg md:text-2xl`}>
              Proud Partner with WWF - Pakistan on Local Water Stewardship
            </h1>
            <h5 className="max-w-3xl mt-14 text-sm sm:text-xl lg:text-2xl grow sm:mb-14">
              We are proud to partner with WWF - Pakistan to promote Water
              Stewardship among the vulnerable communities of Karachi. We
              recognize the critical importance of preserving and managing our
              freshwater resources. Our partnership with WWF - Pakistan is
              focused on implementing strategic water stewardship practices that
              not only benefit our operations but also support the broader
              community and ecosystem. We engaged with various stakeholders,
              including neighboring companies and local communities, to share
              insights and collaborate on innovative water management
              strategies. Our goal is to foster a collective approach to address
              water-related challenges and promote best practices.
            </h5>
            <div className="flex justify-between items-center mt-6 sm:mt-0">
              <div>
                <h6 className="text-sm sm:text-xl uppercase">news</h6>
                <h4 className="text-xl sm:text-5xl">13.11.24</h4>
              </div>
              <Button label="Learn More" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
