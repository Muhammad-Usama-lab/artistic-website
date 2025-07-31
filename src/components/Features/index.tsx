"use client";

import Button from "../Button";

const Features = () => {
  const text =
    "As the world's leading manufacturer of denim, PREMIUM WOVENS & PIECE DYED FABRICS and apparel, we strive for excellence in all we do.";
  const words = text.split(" ");

  return (
    <>
      <section id="features" className="flex py-16 md:py-30 lg:py-40">
        <div className="container p-4">
          <h1
            className="max-w-8xl primary-font text-4xl lg:text-7xl sm:text-6xl sm:p-4 sm:pt-10 uppercase my-10"
            data-scroll
            data-scroll-speed="1"
          >
            {words.map((word, i) => {
              const isPrimary =
                i >= 3 && i <= 12;
              return (
                <span
                  key={i}
                  className="inline-block"
                  style={{ overflow: "hidden" }}
                >
                  <span
                    className={`word-anim inline-block -translate-y-full transition-transform duration-1000 ease-out ${
                      isPrimary ? "text-primary" : ""
                    }`}
                    data-scroll
                    data-scroll-class="animate-word-in"
                    data-scroll-repeat="true"
                    data-scroll-offset="100, -200"
                    data-scroll-delay={i * 0.05}
                  >
                    {word}&nbsp;
                  </span>
                </span>
              );
            })}
          </h1>
          <div className="px-4" data-scroll data-scroll-speed="2">
            <Button label="Learn More" goTo="/about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
