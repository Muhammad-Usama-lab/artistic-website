import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/Hero/new-hero";
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
  const images = [
    { image: "/images/hero/1.png", title: "ARTISTIC MILLINERS" },
    { image: "/images/hero/2.png", title: "RENEWABLE ENERGY" },
    { image: "/images/hero/3.jpg", title: "ARTMILL" },
    { image: "/images/hero/5.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/6.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/7.png", title: "WE ARE GLOBAL" },
  ];

  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollUp />
      <div className="snap-center">
        <HeroSlider images={images} />
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
