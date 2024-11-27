"use client";

import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../../styles/demo.module.css";
import DocumentUploader from "./DocumentUploader";

export function Step2() {
  const demo = useSelector((st: RootState) => st.demo);
  const isActive = demo.step === 1;
  const step2 = useRef(null);

  const extraPadding = -15;

  useEffect(() => {
    if (demo.step === 1) scrollToStep2();
  }, [demo.step]);

  const scrollToStep2 = () => {
    const yOffset = -90 - extraPadding; // Offset for header height and additional padding
    const yPosition =
      step2.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };


  return (
    <section className={`h-screen ${!isActive ? "blur" : ""}`}>
      <div ref={step2} className="pt-10"></div>
      <div className="container">
        <h3 className="text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Step # 02
        </h3>
        <h3 className="text-sm font text-black dark:text-white sm:text-2xl lg:text-xl xl:text-xl">
          Upload Document{" "}
          <span className="text-sm text-gray-500">(png, jpg or jpeg)</span>
        </h3>

        <h5 className="mt-10 text-md text-gray-500 dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
          Tips to get better results:
        </h5>
        
        <ul className="list-image-[url(/images/demo/checkmark.svg)] pl-6" >
          <li>Ensure proper lighting in the room.</li>
          <li>Ensure the full document is visible and clear.</li>
          <li>Use the original document for OCR.</li>
        </ul>

        <div className="mt-10">
          <DocumentUploader />
        </div>
      </div>
    </section>
  );
}
