"use client";

import { setStep } from "@/redux/reducers/demoSlice";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Country from "./CountryCard";
import demoData from "./featuresData";
import { useInView } from "react-intersection-observer";

export function Step1() {
  const headerHeight = 100,
    extraPadding = 0;
  const demo = useSelector((st: RootState) => st.demo);
  const [selected, setSelected] = useState(undefined);

  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const step1Ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (demo.step === 0) scrollToStep1();
  }, [demo.step]);

  const next = () => dispatch(setStep(1));

  const setRefs = (node) => {
    step1Ref.current = node;
    inViewRef(node);
  };

  const scrollToStep1 = () => {
    
    if (step1Ref.current) {
      const yOffset = -headerHeight - extraPadding;
      const yPosition =
        step1Ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="lg:h-screen p-10 bg-slate-50 pt-10">
      <div ref={setRefs}></div>
      <div className="container">
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-bold text-body-color dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Step # 01
          </h3>
          <h3 className="text-sm font text-black dark:text-white sm:text-2xl lg:text-xl xl:text-xl">
            Select a Country
          </h3>
        </div>
        <div className="mb-10"></div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {demoData.map((country) => (
            <Country
              key={country.id}
              feature={country}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div className="mt-5">
          <button
            onClick={next}
            className="rounded-sm bg-dark px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-dark/80"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
