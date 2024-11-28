import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import Features from "@/components/Supply-Chain/Features";
import Hero from "@/components/Supply-Chain/Hero";
import ManyFirst from "@/components/Supply-Chain/ManyFirst";
import Milestone from "@/components/Supply-Chain/Milestone";
import ScrollComponent from "@/components/Supply-Chain/ScrollComponent";

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
        <ManyFirst />
      </div>
      <div className="snap-center">
        <Milestone />
      </div>
      <div className="snap-center">
        <section id="scroll" className={`min-h-screen py-16 md:py-40 `}>
          <div className="container-full">
            <ScrollComponent />
          </div>
        </section>
      </div>
      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
