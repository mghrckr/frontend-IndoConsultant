/* eslint-disable no-unused-vars */
import CustomBreadcrumb from "@/components/custom-breadcrumb";
import React from "react";
import hero from "../../assets/images/services/hero-bg-services-3.jpg";
import { HiCheckBadge } from "react-icons/hi2";
import EducationImage from "../../assets/images/training-and-educationss.jpg";

const dataSoftSkills = [
  {
    name: "Personal Empowerment Training",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.", // Jika ingin menambahkan deskripsi, jika tidak di hapus saja
    icon: <HiCheckBadge size={24} color="#ffffff" />,
  },
  {
    name: "Team Building Training",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.", // Jika ingin menambahkan deskripsi, jika tidak di hapus saja
    icon: <HiCheckBadge size={24} color="#ffffff" />,
  },
];

const dataHardSkills = [
  {
    name: "Sitem Manajemen Lingkungan",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.", // Jika ingin menambahkan deskripsi, jika tidak di hapus saja
    icon: <HiCheckBadge size={24} color="#ffffff" />,
  },
  {
    name: "Energi Manajemen Sistem",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.", // Jika ingin menambahkan deskripsi, jika tidak di hapus saja
    icon: <HiCheckBadge size={24} color="#ffffff" />,
  },
  {
    name: "SR Training",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.", // Jika ingin menambahkan deskripsi, jika tidak di hapus saja
    icon: <HiCheckBadge size={24} color="#ffffff" />,
  },
];

const SistemManajemenKeselamatanKetengalistrikan = () => {
  return (
    <div>
      <main>
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <div className="bg-blend-saturation">
            <img
              alt="Hero Image Services"
              src={hero}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </div>
          {/* <div
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
          </div> */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Pemeriksaan dan Penilaian Penerapan Sistem Manajemen
                  Keselamatan Ketenagalistrikan
                </h1>
                <CustomBreadcrumb
                  currentPage="Our Service"
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
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
          <img
            alt="Education Image"
            src={EducationImage}
            width={2432}
            height={1442}
            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
          />
          <div className="max-w-xl flex flex-col gap-5 lg:row-start-3 lg:max-w-md">
            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <p className="text-3xl text-white font-semibold">
                Softskill Training
              </p>
              {dataSoftSkills.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="ml-9 inline-block font-semibold text-white">
                    <span className="absolute left-1 top-1 h-5 w-5 text-indigo-500">
                      {feature.icon}
                    </span>

                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-100" />
              </div>
            </div>

            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <p className="text-3xl text-white font-semibold">
                Hardskill Training
              </p>
              {dataHardSkills.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="ml-9 inline-block font-semibold text-white">
                    <span className="absolute left-1 top-1 h-5 w-5 text-indigo-500">
                      {feature.icon}
                    </span>
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default SistemManajemenKeselamatanKetengalistrikan;
