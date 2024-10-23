/* eslint-disable no-unused-vars */
import React from "react";
import consultant from "../../assets/icons/consultant.svg";
import technology from "../../assets/icons/technology.svg";
import property from "../../assets/icons/property.svg";
import energy from "../../assets/icons/energy.svg";
import academy from "../../assets/icons/academy.svg";
import hero from "../../assets/images/hero/process-2-bg.png";

const dataIntegratedGreenBusiness = [
  {
    id: 1,
    label: "Consultant",
    icon: consultant,
    order: 1,
  },
  {
    id: 2,
    label: "Technology",
    icon: technology,
    order: 2,
  },
  {
    id: 3,
    label: "Property",
    icon: property,
    order: 3,
  },
  {
    id: 4,
    label: "Energy",
    icon: energy,
    order: 4,
  },
  {
    id: 5,
    label: "Academy",
    icon: academy,
    order: 5,
  },
];

const WhoWeAre = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center relative isolate overflow-hidden">
      <img
        alt="hero image"
        src={hero}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center mb-10">
          <p className="uppercase text-[#265093] text-base font-medium">
            Who We Are{" "}
          </p>
          <h3 className="text-2xl md:text-6xl font-semibold text-center">
            Integrated Green Business
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {dataIntegratedGreenBusiness.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-5">
              <div className="rounded-full w-fit h-fit p-14 items-center bg-[#F8F7F0] relative">
                <span className="sr-only">{item.label}</span>
                <img src={item.icon} alt={item.label} />
                <div className="bg-[#265093] rounded-full w-6 h-6 p-5 absolute flex top-0 left-3 items-center justify-center">
                  <span className="text-lg font-semibold text-white">
                    {item.order}
                  </span>
                </div>
              </div>
              <p className="text-[#265093] font-semibold text-2xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
