import Button from "../Button";




const OurValues = () => {
  return (
    <>
      <section
        id="our-values"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container">
          <h2
            className={`text-sm tracking-widest uppercase text-gray-500 dark:text-white sm:text-4xl md:text-[13px]`}
          >
            Our values
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10">
            <div className="max-w-lg sm:max-w-full">
              <h4 className="text-primary font-semibold text-2xl py-5 ">
                We believe in smart and strategic growth and we think globally.
                We are investing in our ecosystem, including building a
                nearshoring network of sourcing solutions in the Western
                Hemisphere.
              </h4>
              <h4 className="text-primary font-semibold text-2xl py-5">
                Our values inform all aspects of our business, from a
                committment to renewable energy to our pioneering development of
                sustainable materials and processes to our pledge to be a Net
                Zero enterprise by 2040.
              </h4>
            </div>
            <div className="max-w-lg sm:max-w-full ">
              <h4 className="text-primary font-semibold text-2xl py-5">
                We have a large, global workforce and we are committing to
                maintaining a safe, inclusive and respectful workplace where all
                our employees are valued and respected. That includes empowering
                women, promoting equality and investing in our future by taking
                action to combat cliemate change.
              </h4>
            </div>
          </div>
          <div className="flex justify-end">

          <Button theme="primary" label="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
