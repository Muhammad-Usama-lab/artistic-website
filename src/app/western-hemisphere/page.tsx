import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import DetailComponent from "@/components/Western-Hemisphere/DetailComponent";
import Features from "@/components/Western-Hemisphere/Features";
import Hero from "@/components/Western-Hemisphere/Hero";

const Page = () => {
  const data = [
    {
      title: "Star Fades International",
      paragraph: [
        `SFI joined the Artistic Milliners ecosystem in 2020, with the aquisition of an existing laundry in Southern California with a dedicated clientele and a staff of seasoned denim experts. Since that time, SFI has grown to be a nearshoring hub where brands and retailers can experiement and test new developments and put those development into action in the Western Hemisphere. The growing SFI nearshoring network gives denim companies sourcing options closer to distribution centers and customers.`,
      ],
    },
    {
      title: "SFI CENTRAL AMERICA",
      paragraph: [
        `SFI expanded its nearshoring network into Central America with the 2023 opening of the SFI office in Guatemala City. The company is currently forging strategic partnerships with garment faciliities in the region that can produce quality denim apparel, as well as other garments, giving
manufacturers and brands more sourcing options closer to the United States.`,
      ],
    },
    {
      title: "ARTISTIC MILLINERS MEXICO",
      paragraph: [
        `Artistic Milliners took a milestone step into building its Western Hemisphere operations in 2024 with the purchase of a vast garment manufacturing facility in Mexico. Spread over 10 acres, the facility has been modernized with state- of-the-art equipment and added services for apparel brands and manufacturers looking to for nearshoring sourcing solutions.`,
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
      
      {data?.map((v, index) => (
        <div className="snap-center" key={`v?.title ${index}`}>
          <DetailComponent title={v?.title} paragraph={v?.paragraph} />
        </div>
      ))}

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
