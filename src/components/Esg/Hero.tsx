"use client";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`relative min-h-screen flex z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[400px] 2xl:pb-[20px] 2xl:pt-[550px]`}
      >
        <div className="absolute right-0 top-0 bottom-0 left-0 z-[-1]  lg:opacity-100">
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            src="/images/esg/1.jpg"
            className="mx-auto w-full mt-60 md:mt-0 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
          /> */}
          <img
            src="/images/esg/2.jpg"
            className="mx-auto w-full mt-60 md:mt-0 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
