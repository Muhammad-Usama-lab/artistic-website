"use client";

import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../../styles/demo.module.css";
import DocumentUploader from "./DocumentUploader";
import JsonSnippet from "./CodeSnippet";

export function Step3() {
  const demo = useSelector((st: RootState) => st.demo);
  const isActive = demo.step === 1;
  const documentCaptured = demo?.data?.step2?.documentImage;
  const step3 = useRef(null);

  const extraPadding = -15;

  useEffect(() => {
    if (demo.step === 1) scrollToStep3();
  }, [demo.step]);

  const scrollToStep3 = () => {
    const yOffset = -90 - extraPadding; // Offset for header height and additional padding
    const yPosition =
      step3.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const data = {
    nicNumber: "434343-0976635-3",
    name: "muhammad ali",
    fatherName: "abdul nasir",
    gender: "M",
    country: "Pakistan",
    dateOfBirth: "09.07.1998",
    dateOfIssue: "22.08.2016",
    dateOfExpiry: "22.08.2026",
    isHusband: false,
    nicVariation: "smart-card",
    nameUrdu: "",
    fatherNameUrdu: "",
    husbandNameUrdu: "",
    husbandName: "",
    document: {
      front: "17302677076242783.9026642972663_nic_front.jpeg",
      signature: "17302677076243241.43041792202_signature.jpeg",
      profile: "17302677076245505.533932274_profile.jpeg",
    },
    variation: "smart-card",
    side: "front",
  };

  return (
    <section className={`lg:h-screen bg-slate-50 ${!isActive ? "blur" : ""}`}>
      <div ref={step3} className="pt-10"></div>
      <div className="container">
        <h3 className="text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Step # 03
        </h3>
        <h3 className="text-sm font text-black dark:text-white sm:text-2xl lg:text-xl xl:text-xl">
          Performing OCR{" "}
        </h3>

        <h3 className="mt-10 mb-10 text-xl text-center font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Data Extracted with Facial & Signature Capture
        </h3>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <div>
            <JsonSnippet data={data} />
            <button className="visible xs:invisible mt-5 rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
              Perform Liveliness Test Now
            </button>
          </div>
          <div>
            {documentCaptured && (
              <img
                className="rounded-md"
                src={URL.createObjectURL(documentCaptured)}
                width={400}
              />
            )}
            <button className="invisible sm:visible mt-5 rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
              Perform Liveliness Test Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
