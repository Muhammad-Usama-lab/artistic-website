import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import OurValues from "@/components/Values";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistic Milliners",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  
  const slides = [
    {
      title: "OUR AREAS OF EXPERTISE",
      list: ["Cotton", "Spinning", "Fabric", "Manufacturing", "Finishing"],
      folder: "row1",
      quantity: 4,
    },
    {
      title: "OUR AREAS OF EXPERTISE",
      list: ["Design", "Development", "Fabric & Wash Innovation", "Sourcing"],
      folder: "row2",
      quantity: 4,
    },
    {
      title: "OUR AREAS OF EXPERTISE",
      list: [
        "Renewable Energy",
        "Circularity & Zero Waste",
        "Green Chemistry",
        "Biodiversity",
        "Water Conservation & Recycling",
      ],
      folder: "row3",
      quantity: 4,
    },
    {
      title: "OUR AREAS OF EXPERTISE",
      list: ["Community Wellbeing", "Equity & Inclusion", "Worker Empowerment"],
      folder: "row4",
      quantity: 3,
    },
  ];

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
       

      <div className="snap-center">
        <OurValues />
      </div>
      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
}
