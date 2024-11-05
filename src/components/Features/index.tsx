import Button from "../Button";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="min-h-screen flex py-16 md:py-20 lg:py-28">
        <div className="container">
          <h1 className="text-7xl uppercase my-10 ">
            As the{" "}
            <span className="text-primary">
              world's leading manufacturer of denim and apparel,
            </span>{" "}
            we strive for excellence in all we do.
          </h1>
        <Button label="Learn More" onClick={() => null} />
        </div>
      </section>
    </>
  );
};

export default Features;
