import { forwardRef, useImperativeHandle, useState } from "react";

const Timeline = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the bold milestone
  const milestones = [
    "Our renewable energy division is growing",
    "We have 360-degree recycling",
    "We're building our organic farming infrastructure",
    "We're automating our processes",
  ];

  useImperativeHandle(ref, () => ({
    left: () => handlePrev(),
    right: () => handleNext(),
  }));

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0)); // Move left, stop at first
  };

  const handleNext = () => {
    if (activeIndex === milestones.length - 1) {
      return setActiveIndex(0);
    }

    setActiveIndex((prev) =>
      prev < milestones.length - 1 ? prev + 1 : milestones.length - 1
    );
  };

  return (
    <div className="w-full max-w-full mx-auto ">
      {/* Timeline */}
      <div className="relative overflow-hidden ">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 30}%)`, // Shift active milestone to left
          }}
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[30%] mx-auto ${
                index === activeIndex ? "font-bold" : "text-gray-400"
              }`}
            >
              <h3 className="text-4xl">{String(index + 1).padStart(2, "0")}</h3>
              <div
                className={`mt-2 p-4 pt-4 border-black border-t border-r flex items-center justify-center h-4 ${index === 0 ? "border-l" : ""}`}
              ></div>
              <div className="flex items-center justify-center">
                <p className="text-2xl font-light max-w-96">
                  {milestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Timeline;
