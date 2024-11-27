"use client";

import { Feature } from "@/types/feature";
import { useInView } from "react-intersection-observer";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { icon, title, paragraph } = feature;
  const animations = [
    "slide-left",
    "slide-left",
    "slide-left",
    "slide-left",
    "slide-right",
    "slide-right",
    "slide-right",
  ];
  return (
    <div className="w-full" ref={inViewRef}>
      <div
        className={`${isVisible ? animations[feature.id] : ""}`}
        data-wow-delay="0.9s"
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
