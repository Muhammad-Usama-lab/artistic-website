import Button from "../Button";

const Features = () => {
  
  return (
    <>
      <section id="features" className="min-h-screen flex py-16 md:py-30 lg:py-40">
        <div className="container">
          <h1 className="lg:text-7xl sm:text-6xl text-3xl sm:p-4 sm:pt-10 uppercase my-10 ">
            As the{" "}
            <span className="text-primary ">
              world's leading manufacturer of denim and apparel,
            </span>{" "}
            we strive for excellence in all we do.
          </h1>
        <Button label="Learn More" />
        </div>
      </section>
    </>
  );
};

export default Features;
