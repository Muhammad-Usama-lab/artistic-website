import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Supply-Chain/Features";
import Hero from "@/components/Supply-Chain/Hero";
import ManyFirst from "@/components/Supply-Chain/ManyFirst";



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
    </div>
  );
};

export default Page;
