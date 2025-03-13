import ScrollUp from "@/components/Common/ScrollUp";
import Collage from "@/components/Esg/Collage";

import GridComponent from "@/components/Common/GridComponent";
import Features from "@/components/Esg/Features";
import Hero from "@/components/Esg/Hero";
import Latest from "@/components/Esg/Latest";
import ScrollComponent from "@/components/Esg/ScrollComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">
      <Header />
      <ScrollUp />
      <div className="snap-center">
        <Hero />
      </div>

      <Features />

      <div className="snap-center">
        <Collage />
      </div>
      <div className="snap-center">
        <section className="min-h-screen flex py-16 md:py-10 lg:py-20 items-center">
          <GridComponent
            title="AM INITIATIVES"
            content={[
              `Our efforts to provide health and wellness benefits extend beyond our employees and into the communities where we operate. Those initiatives include providing new jobs, community schools, clean drinking water and medical services.`,
              `We are always expanding the scope of our worker empowerment initiatives in collaboration with our customers and international organizations.`,
            ]}
            image="/images/esg/1.jpg"
          />
        </section>
      </div>

      <div className="snap-center">
        <section id="scroll" className={`min-h-screen py-16 md:py-40 `}>
          <div className="container-full">
            <ScrollComponent />
          </div>
        </section>
      </div>
      <div className=" snap-center">
        <Latest />
      </div>

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
