import TimelineComponent from "./TimelineComponent";

function Milestone() {
  return (
    <section id="many-first" className={`min-h-screen py-10 md:py-30 `}>
      <div className="p-10">
        <h1 className="uppercase max-w-5xl primary-font lg:text-7xl sm:text-6xl text-3xl sm:pt-10 uppercase my-10 ">
          But there's more milestones to reach....
        </h1>

        <TimelineComponent />
      </div>
    </section>
  );
}

export default Milestone;
