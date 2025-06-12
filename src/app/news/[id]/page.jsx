import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News1 from "@/components/NewsPost/News1";

const Page = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header />

      <div className="snap-center">
        <News1 />
      </div>

      <div className=" snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
