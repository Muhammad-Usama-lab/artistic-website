import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import OurValues from "@/components/Values";
import { slides, values } from "@/mock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistic Milliners",
  description: "The Future of the Denim",
  // other metadata
};

export default function Home() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollUp />
      <div className="snap-center">
        <Hero />
      </div>
      <div className="snap-center">
        <Features />
      </div>

      {slides.map((slide, index) => (
        <div key={index} className="snap-center">
          <Slider
            title={slide.title}
            paragraph={slide.list}
            folder={slide.folder}
            quantity={slide.quantity}
          />
        </div>
      ))}

      {values?.map((val, index) => (
        <div key={`values ${index}`} className="snap-center">
          <OurValues data={val} />
        </div>
      ))}

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
}
