import Image from "next/image";
import React from "react";

function ManyFirst() {
  const firstCol = [
    {
      digit: "01",
      text: "First Gold-certified plant in Pakistan",
      image: "/images/hero/banner.png",
    },
    {
      digit: "02",
      text: "First PCW Cotton",
      image: "/images/hero/banner.png",
    },
    {
      digit: "03",
      text: "First Cradle to Cradle certified denism",
      image: "/images/hero/banner.png",
    },
  ];
  const secondCol = [
    {
      digit: "04",
      text: "First Fairtrade Factory",
      image: "/images/hero/banner.png",
    },
    {
      digit: "05",
      text: "First Platinum-certified LEED Unit",
      image: "/images/hero/banner.png",
    },
  ];
  return (
    <section id="many-first" className={`min-h-screen py-16 md:py-30 `}>
      <div className="p-10">
        <h1 className="max-w-8xl primary-font lg:text-6xl sm:text-6xl text-xl sm:p-4 sm:pt-10 uppercase my-10 ">
          THERE HAVE BEEN MANY FIRSTS...
        </h1>

        <div className="grid grid-cols-12 gap-x-28 gap-y-10 md:grid-cols-12">
          <div className="col-span-5">
            {firstCol?.map((value, index) => (
              <div
                key={index + "first-col"}
                className={`flex justify-between border-t border-black py-3 ${index === firstCol.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex flex-col justify-center">
                  <h3 className="primary-font lg:text-6xl sm:text-6xl text-xl ">
                    {value?.digit}
                  </h3>
                  <p className="text-xl">{value?.text}</p>
                </div>
                <div>
                  <Image
                    src={value?.image}
                    alt="about-image"
                    className="h-32 w-40 mx-auto drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    width={220}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-5">
            {secondCol?.map((value, index) => (
              <div
                key={index + "first-col"}
                className={`flex justify-between border-t border-black py-3 ${index === secondCol?.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex flex-col justify-center">
                  <h3 className="primary-font lg:text-6xl sm:text-6xl text-xl ">
                    {value?.digit}
                  </h3>
                  <p className="text-xl">{value?.text}</p>
                </div>
                <div>
                  <Image
                    src={value?.image}
                    alt="about-image"
                    className="h-32 w-40 mx-auto drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManyFirst;
