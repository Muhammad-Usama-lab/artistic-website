import Features from "@/components/News/Features";
import Hero from "@/components/News/Hero";

import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="snap-center">
        <Hero />
      </div>
     
      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
