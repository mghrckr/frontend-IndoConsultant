/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../../assets/images/services/hero-bg-green-house-gas.jpg";
import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { HiCheckBadge } from "react-icons/hi2";
import ghg from "../../assets/images/services/greenhouse-gases.png";

const dataVerificationofTechnicalAspects = [
  {
    id: 1,
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
    desc: "Ensuring the suitability of RIB with EPC contract / Engineering Document (type, spesifications and quantity of goods)",
  },
  {
    id: 2,
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
    desc: "Ensure that the price of imported goods in the contract does not include import duties",
  },
  {
    id: 3,
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
    desc: "Ensure goods have not been produced domestically in accordance with regulations Kemenin No.32/2020",
  },
  {
    id: 4,
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
    desc: "Goods imported with facilities excluding spare parts, consumables wear (consumable) and workshop equipment (workshop tools)",
  },
  {
    id: 5,
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
    desc: "Verify goods according to HS Code (HS tariff post) based on the Book Indonesian Customs Tariff (BTKI)",
  },
];

export default function GreenHouseGas() {
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <div className="bg-blend-saturation">
            <img
              alt="Hero Image Services"
              src={hero}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </div>
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Greenhouse Gas (GHG)
                </h1>
                <CustomBreadcrumb
                  currentPage="Green House Gas"
                  prevPage="Home"
                  prevHref="/"
                />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </main>

      {/* Content Section */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                  Greenhouse Gas (GHG) Document on Power Plant
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-600 font-semibold">
                  Carbon Trading Technical Assistance Consultant
                </p>

                <div className="flex flex-col gap-2 mt-2">
                  {dataVerificationofTechnicalAspects.map((item) => (
                    <ul key={item.id}>
                      <li className="flex gap-5 items-start text-lg text-gray-600">
                        <div>{item.icon}</div>
                        {item.desc}
                      </li>
                    </ul>
                  ))}
                </div>

                <p className="mt-6 text-xl leading-8 text-gray-600 font-semibold">
                  Technical Assistance Consultant in Emission Offset
                </p>

                <div className="flex flex-col gap-2 mt-2">
                  {dataVerificationofTechnicalAspects.map((item) => (
                    <ul key={item.id}>
                      <li className="flex gap-5 items-start text-lg text-gray-600">
                        <div>{item.icon}</div>
                        {item.desc}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <img
              alt="Grenhouse Gases Image"
              src={ghg}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
