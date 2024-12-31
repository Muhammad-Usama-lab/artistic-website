import Button from "../Button";

const Latest = () => {
 
  return (
    <>
      <section id="collage" className="h-screen py-28 lg:py-0">
        <div className="lg:h-1/5">
          <div className="h-full flex flex-col justify-end">
            <h1 className="uppercase primary-font text-2xl sm:text-3xl md:text-4xl xl:text-5xl px-4 py-2  sm:p-4  border-black border-t border-b-1">
              THE LATEST
            </h1>
          </div>
        </div>
        <div className="lg:h-3/4">
          <div className="grid h-full grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-between border-black border p-8">
              <h1 className={`max-w-xl font-bold text-lg md:text-2xl`}>
                Vogue Business Names AM's Saqib Sohail to Innovators List
              </h1>
              <h5 className="max-w-2xl mt-5 sm:mt-14 text-sm sm:text-2xl grow">
                Artistic Milliner's Head of Responsible Business Projects, Saqib
                Sohail, was named a Vogue Business Innovator. Saqib's dedication
                to our ethos for equitable sustainability has helped drive
                transformative change within the wider industry., and sparked
                vital conversations. From helping build our organic and
                sustainable cotton initiatives to championing traceability and
                community development, Saqib exemplifies Artistic Milliners'
                commitment to a more responsible future.
              </h5>
              <div className="flex justify-between items-center mt-6 sm:mt-0">
                <div>
                  <h6 className="text-sm sm:text-xl uppercase">news</h6>
                  <h4 className="text-xl sm:text-5xl">13.11.24</h4>
                </div>
                <Button label="Learn More" />
              </div>
            </div>
            <div className="flex flex-col justify-between border-black border p-8">
              <h1 className={`max-w-2xl font-bold text-lg md:text-2xl`}>
                Proud Partner with WWF - Pakistan on Local Water Stewardship
              </h1>
              <h5 className="max-w-3xl mt-14 text-sm sm:text-xl grow">
                We are proud to partner with WWF - Pakistan to promote Water
                Stewardship among the vulnerable communities of Karachi. We
                recognize the critical importance of preserving and managing our
                freshwater resources. Our partnership with WWF - Pakistan is
                focused on implementing strategic water stewardship practices
                that not only benefit our operations but also support the
                broader community and ecosystem. We engaged with various
                stakeholders, including neighboring companies and local
                communities, to share insights and collaborate on innovative
                water management strategies. Our goal is to foster a collective
                approach to address water-related challenges and promote best
                practices.
              </h5>
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="text-xl uppercase">news</h6>
                  <h4 className="text-5xl ">13.11.24</h4>
                </div>
                <Button label="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
