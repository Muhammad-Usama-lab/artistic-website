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
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollUp />
      <div className="snap-always snap-center">
        <Hero />
      </div>
      <div className="snap-always snap-center">
        <Features />
      </div>
      <div className="snap-always snap-center">
        <Slider
          title="OUR AREAS OF EXPERTISE"
          paragraph={[
            "Cotton",
            "Spinning",
            "Fabric",
            "Manufacturing",
            "Finishing",
          ]}
          folder="row1"
        />
      </div>
      <div className="snap-always snap-center">
        <Slider
          title="OUR AREAS OF EXPERTISE"
          paragraph={[
            "Design",
            "Development",
            "Fabric & Wash Innovation",
            "Sourcing",
          ]}
          folder="row2"
        />
      </div>
      <div className="snap-always snap-center">
        <Slider
          title="OUR AREAS OF EXPERTISE"
          paragraph={[
            "Renewable Energy",
            "Circularity & Zero Waste",
            "Green Chemistry",
            "Biodiversity",
            "Water Conservation & Recycling",
          ]}
          folder="row3"
        />
      </div>
      <div className="snap-always snap-center">
        <Slider
          title="OUR AREAS OF EXPERTISE"
          paragraph={[
            "Community Wellbeing",
            "Equity & Inclusion",
            "Worker Empowerment",
          ]}
          folder="row4"
          quantity={3}
        />
      </div>
      <div className="snap-always snap-center">
        <OurValues />
      </div>
      <div className=" snap-center">

      <Footer />
      </div>
    </div>
  );
}
