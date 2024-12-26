import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import DetailComponent from "@/components/Esg/DetailComponent";
import Features from "@/components/Esg/Features";
import Hero from "@/components/Esg/Hero";

const Page = () => {
  const data = [
    {
      title: "Solar",
      paragraph: [
        `Our first foray into renewable energy was solar. Solar panels
        installed on all our facilities helps generate clean energy for
        our operations.`,
        `Incorporated as a separate entity in 2018, Artistic Energy Pvt.
        Ltd. has a current capacity in excess of 49.3MW, delivers 155GWh
        of green energy to the grid and has a CO2 offset of 101,511 Mt.`,
        `And the work continues. We have another 50dc capacity solar
        energy project in the works.`,
      ],
    },
    {
      title: "Wind",
      paragraph: [
        `The company's Artistic Energy unit built and operates two state-of-the art wind farms in Jhimpir in the Thatta District of the Sindh province.`,
        `Our wind farms power 144,500 households through Pakistan's national grid.`,
        `Operational since 2022, Artistic Wind Power Pvt. has a capacity in excess of 50MW, delivers 147GWh of green energy to the grid and offset 96,396Mt of CO2`,
      ],
    },
    {
      title: "Hydro",
      paragraph: [
        `The next frontier for Artistic Milliners's renewable energy initiatives is water. We have two hydroelectric projects including ROR (Run of River) power plants and IPPs (Independent Power Producer). When completed, the two projects will have a capacity of 118MW.`,
      ],
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
      {/* {data?.map((v, index) => (
        <div className="snap-center" key={`v?.title ${index}`}>
          <DetailComponent title={v?.title} paragraph={v?.paragraph} />
        </div>
      ))} */}

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
