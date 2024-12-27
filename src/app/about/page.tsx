import ScrollUp from "@/components/Common/ScrollUp";
import DetailComponent from "@/components/Esg/DetailComponent";
import Global from "@/components/About/Global";
import Features from "@/components/About/Features";
import Latest from "@/components/About/Latest";
import Hero from "@/components/About/Hero";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollUp />
      <div className="snap-center">
        <Hero />
      </div>
      <div className="snap-center">
        <Features />
      </div>
      <div className="snap-center">
        <Global />
      </div>

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
