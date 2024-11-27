import Button from "../Button";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="min-h-screen flex py-16 md:py-30 lg:py-40"
      >
        <div className="container-full p-4">
          <h1 className="max-w-8xl primary-font lg:text-8xl sm:text-6xl text-xl sm:p-4 sm:pt-10 uppercase my-10 ">
            OUR STRATEGY <br />
            IS ALSO <span className="text-primary ">SUSTAINABLE</span> .
          </h1>

          <h5 className="max-w-5xl primary-font lg:text-5xl  text-xl sm:p-4 sm:pt-10">
            We are curating an ecosystem that not only addresses the needs of
            our customers, it anticipates those needs.
          </h5>
         
        </div>
      </section>
    </>
  );
};

export default Features;
