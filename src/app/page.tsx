import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    { image: "/images/hero/4.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/5.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/6.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/7.png", title: "WE ARE GLOBAL" },
    { image: "/images/hero/9.jpg", title: "WE ARE GLOBAL" },
    { image: "/images/hero/11.jpg", title: "WE ARE GLOBAL" },
    { image: "/images/hero/12.jpg", title: "WE ARE GLOBAL" },
  ];

  return (
    <div>
      <Header />
      <ScrollUp />

      <HeroSlider images={images} />

      <Features />

      {slides.map((slide, index) => (
        <Slider
          title={slide.title}
          paragraph={slide.list}
          folder={slide.folder}
          quantity={slide.quantity}
          key={index}
        />
      ))}

      {values?.map((val, index) => (
        <OurValues data={val} key={`values ${index}`} />
      ))}

      <Footer />
    </div>
  );
}
