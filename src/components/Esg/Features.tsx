import Button from "../Button";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container px-4">
          <div className="grid grid-cols-12 pr-10">
            <div className="max-w-4xl col-span-7">
              <h5 className="primary-font lg:text-3xl sm:p-4 pt-4 sm:pt-2">
                At Artistic Milliners, we're fully committed to sustainability.
                It is central to everything we do, and we're proud to align our
                efforts with the United Nations' Sustainable Development Goals.
                We work closely with our brand partners, global think tanks, and
                change leaders to define our sustainability goals and build a
                strategy for success. We work with the world's leading
                third-party assessors to ensure that our sustainability impact
                is real and measurable. And we're constantly challenging
                ourselves to do even better.
              </h5>
            </div>
            <div className="max-w-3xl col-span-5">
              <h5 className="primary-font lg:text-3xl  sm:p-4 pt-4 sm:pt-2">
                Our vision of a successful future is one that is responsible,
                equitable, and sustainable for people, for the planet, and for
                our business. We are focused on turning our commitments into
                innovative solutions to build a sustainable and transparent
                supply chain and to ensure the heart of our company - our
                employees - are treated with respect, fairness and are afforded
                opportunities for advancement across all genders.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
