"use client";

import React, { useRef } from "react";
import ArrowButton from "../Button/ArrowButton";
import Timeline from "./Timeline";

function TimelineComponent() {
  const ref = useRef(null);
  return (
    <div className="mt-10 sm:mt-36 ">
      <h2
        className={`uppercase text-xs  my-3 tracking-widest text-gray-500 dark:text-white sm:text-lg md:text-[13px]`}
      >
        our milestones
      </h2>
      <div className="flex gap-2">
        <ArrowButton onClick={() => ref?.current?.left()} />
        <ArrowButton right={true} onClick={() => ref?.current?.right()} />
      </div>
      <div className="mt-16">
        <Timeline ref={ref} />
      </div>
    </div>
  );
}

export default TimelineComponent;
