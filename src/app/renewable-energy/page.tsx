import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import DetailComponent from "@/components/Renewable/DetailComponent";
import Features from "@/components/Renewable/Features";
import Hero from "@/components/Renewable/Hero";

const Page = () => {
  const data = [
    {
      title: "Solar",
      paragraph: [
        `<p>Our first foray into renewable energy was solar. Solar panels
        installed on all our facilities helps generate clean energy for
        our operations.</p>`,
       
        `<p>And the work continues. We have another <b>50MW</b> capacity solar
        energy project in the works.</p>`,
      ],
      image:"/images/renewable/1.jpg"
    },
    {
      title: "Wind",
      paragraph: [
        `<p>The company's Artistic Energy unit built and operates two state-of-the art wind farms in Jhimpir in the Thatta District of the Sindh province.</p>`,
        `<p>Our wind farms power <b>144,500</b> households through Pakistan's national grid.</p>`,
        `<p>Incorporated as a separate entity in 2018, Artistic Energy Pvt.
        Ltd. has a current capacity in excess of <b>49.3MW</b>, delivers <b>155GWh</b>
        of green energy to the grid and has a CO2 offset of <b>101,511 MT</b>.</p>`,
        `<p>Operational since 2022, Artistic Wind Power Pvt. has a capacity in excess of <b>50MW</b>, delivers <b>147GWh</b> of green energy to the grid and offset <b>96,396MT</b> of CO2</p>`,
      ],
      image:"/images/renewable/2.jpg"
    },
    // {
    //   title: "Hydro",
    //   paragraph: [
    //     `The next frontier for Artistic Milliners's renewable energy initiatives is water. We have two hydroelectric projects including ROR (Run of River) power plants and IPPs (Independent Power Producer). When completed, the two projects will have a capacity of 118MW.`,
    //   ],
    // },
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
      {data?.map((v, index) => (
        <div className="snap-center" key={`v?.title ${index}`}>
          <DetailComponent image={v?.image} title={v?.title} paragraph={v?.paragraph} />
        </div>
      ))}

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
