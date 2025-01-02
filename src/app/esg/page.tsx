import ScrollUp from "@/components/Common/ScrollUp";
import Collage from "@/components/Esg/Collage";
import DetailComponent from "@/components/Esg/DetailComponent";

import Hero from "@/components/Esg/Hero";
import Latest from "@/components/Esg/Latest";
import Features from "@/components/Esg/Features";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollUp />
      <div className="snap-center">
        <Hero />
      </div>

      <Features />

      <div className="snap-center">
        <Collage />
      </div>
      <div className="snap-center">
        <DetailComponent
          title="AM INITIATIVES"
          paragraph={[
            `
Our efforts to provide health and wellness benefits extend beyond our employees and into the communities where we operate. Those initiatives include providing new jobs, community schools, clean drinking water and medical services.`,
            `We are always expanding the scope of our worker empowerment initiatives in collaboration with our customers and international organizations.`,
          ]}
          image="/images/esg/1.jpg"
        />
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
