import Breadcrumb from "@/components/Common/Breadcrumb";
import { Step1 } from "@/components/Demo/Step1";
import { Step2 } from "@/components/Demo/Step2";
import { Step3 } from "@/components/Demo/Step3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Artistic Milliners",
  description: "Demo Page of Artistic Milliners",
  // other metadata
};

const Demo = () => {
  return (
    <>
      <Breadcrumb
        pageName="Interactive Demo"
        description="Take a closer look at our innovative digital onboarding solutions in action. Experience firsthand how our powerful APIs streamline processes and enhance security."
      />

      <section className="pb-[120px] pt-[120px]">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
    </>
  );
};

export default Demo;
