/* eslint-disable no-unused-vars */
import React from "react";
import Card from "@/components/card";
import consultant from "../../assets/icons/consultant.svg";
import technology from "../../assets/icons/technology.svg";
import humancapital from "../../assets/icons/human-capital.svg";

const services = [
  {
    id: 1,
    title: "Consultant",
    category: "Software",
    feature: [
      {
        name: "Concept",
      },
      {
        name: "Design",
      },
      {
        name: "Guideline",
      },
    ],
    icon: consultant,
  },
  {
    id: 2,
    title: "Technology",
    category: "Hardware",
    feature: [
      {
        name: "Technology",
      },
      {
        name: "Facility",
      },
      {
        name: "Infrastructure",
      },
    ],
    icon: technology,
  },
  {
    id: 3,
    title: "Human Capital",
    category: "Brainware",
    feature: [
      {
        name: "Awareness",
      },
      {
        name: "Attitude",
      },
      {
        name: "People Orientation",
      },
    ],
    icon: humancapital,
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-7 items-center justify-center mx-auto max-w-7xl p-6 lg:px-8 lg:py-24 bg-white">
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="text-[#265093] font-medium uppercase text-base">
          Our services
        </p>
        <div className="max-w-2xl flex item-center justify-center px-1">
          <h2 className="text-2xl md:text-6xl font-semibold text-center">
            Preserving The Earth For Future Generations
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            vector={item.icon}
            desc={item.feature}
            alt={`${item.title} icon`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
