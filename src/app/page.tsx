import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
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
          _class=""
          images={["/images/section/row1/1.jpg"]}
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
          _class=""
          images={["/images/section/row2/1.jpg"]}
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
          _class=""
          images={["/images/section/row3/1.jpg"]}
        />
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
          _class=""
          images={["/images/section/row4/1.jpg"]}
        />
      </div>
    </div>
  );
}
