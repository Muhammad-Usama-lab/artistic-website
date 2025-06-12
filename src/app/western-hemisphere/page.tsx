import GridComponent from "@/components/Common/GridComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Features from "@/components/Western-Hemisphere/Features";
import Hero from "@/components/Western-Hemisphere/Hero";
import data from "./data";
const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header />

      <div className="snap-center">
        <Hero />
      </div>
      <div className="snap-center">
        <Features />
      </div>

      {data?.map((v, index) => (
        <section className="min-h-screen flex py-16 md:py-10 lg:py-20 items-center">
          <div className="snap-center" key={`v?.title ${index}`}>
            <GridComponent
              image={v?.image}
              title={v?.title}
              content={v?.paragraph}
              html
            />
          </div>
        </section>
      ))}

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
