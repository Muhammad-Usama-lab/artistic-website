"use client";

import { useInView } from "react-intersection-observer";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const { ref: inViewRef, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <div
        ref={inViewRef}
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`${isVisible ? "slide-left" : ""} mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]`}>
          {title}
        </h2>
        <p className={`${isVisible ? "slide-up" : ""} text-base !leading-relaxed text-body-color md:text-lg`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
