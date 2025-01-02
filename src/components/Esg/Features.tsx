"use client";

import Values from "./Values";

const Features = () => {
  const data = [
    `At Artistic Milliners, we're fully committed to sustainability. It
            is central to everything we do, and we're proud to align our efforts
            with the United Nations' Sustainable Development Goals. We work
            closely with our brand partners, global think tanks, and change
            leaders to define our sustainability goals and build a strategy for
            success. We work with the world's leading third-party assessors to
            ensure that our sustainability impact is real and measurable. And
            we're constantly challenging ourselves to do even better.`,
    `Our vision of a successful future is one that is responsible,
            equitable, and sustainable for people, for the planet, and for our
            business. We are focused on turning our commitments into innovative
            solutions to build a sustainable and transparent supply chain and to
            ensure the heart of our company - our employees - are treated with
            respect, fairness and are afforded opportunities for advancement
            across all genders.`,
  ];
  return data?.map((val, index) => (
    <div className="snap-center">
      <Values text={val} key={"val" + index} />
    </div>
  ));
};

export default Features;
