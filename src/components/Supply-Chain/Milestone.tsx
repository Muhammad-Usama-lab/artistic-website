import TimelineComponent from "./TimelineComponent";

function Milestone() {
  const firstCol = [
    {
      digit: "01",
      text: "First Gold-certified plant in Pakistan",
      image: "/images/hero/banner.png",
    },
    {
      digit: "02",
      text: "First PCW Cotton",
      image: "/images/hero/banner.png",
    },
    {
      digit: "03",
      text: "First Cradle to Cradle certified denism",
      image: "/images/hero/banner.png",
    },
  ];
  const secondCol = [
    {
      digit: "04",
      text: "First Fairtrade Factory",
      image: "/images/hero/banner.png",
    },
    {
      digit: "05",
      text: "First Platinum-certified LEED Unit",
      image: "/images/hero/banner.png",
    },
  ];
  return (
    <section id="many-first" className={`min-h-screen py-16 md:py-30 `}>
      <div className="p-10">
        <h1 className="uppercase max-w-5xl primary-font lg:text-7xl sm:text-6xl text-xl sm:pt-10 uppercase my-10 ">
          But there's more milestones to reach....
        </h1>

        <TimelineComponent />
      </div>
    </section>
  );
}

export default Milestone;
