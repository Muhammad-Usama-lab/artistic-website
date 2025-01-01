import Features from "@/components/About/Features";
import Global from "@/components/About/Global";
import Hero from "@/components/About/Hero";
import ScrollUp from "@/components/Common/ScrollUp";
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
