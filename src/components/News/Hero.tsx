"use client";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`relative min-h-screen flex z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[400px] 2xl:pb-[20px] 2xl:pt-[450px]`}
      >
        <div className="w-full">
          <div className="flex flex-col items-center gap-10">
            {/* <img
              src="/images/logo/logo.png"
              alt="artistic-logo"
              className="w-1/4 "
            /> */}
            <h1 className="text-xl sm:text-5xl lg:text-7xl uppercase">coming soon...</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
