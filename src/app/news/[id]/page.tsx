// app/news/[id]/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News1 from "@/components/NewsPost/News1";
import News2 from "@/components/NewsPost/News2";
import News3 from "@/components/NewsPost/News3";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const { id } = params;

  const renderNews = () => {
    switch (id) {
      case "1":
        return <News1 />;
      case "2":
        return <News2 />;
      case "3":
        return <News3 />;
      default:
        return <div className="p-4 text-center ">News post not found</div>;
    }
  };

  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <Header />

      <div className="snap-center">{renderNews()}</div>

      <div className="snap-center">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
