/* eslint-disable no-unused-vars */
import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
const features = [
  {
    name: "Service 01",
    description:
      "Pemeriksaan dan Penilaian Tingkat Komponen Dalam Negeri di Bidang Ketenagalistrikan",
    icon: WrenchScrewdriverIcon,
    href: "/pemeriksaan-dan-penilaian-tingkat-komponen-dalam-negeri",
  },
  {
    name: "Service 02",
    description:
      "Pemeriksaan dan Penilaian Penerapan Sistem Manajemen Keselamatan Ketenagalistrikan",
    icon: WrenchScrewdriverIcon,
    href: "/pemeriksaan-dan-penilaian-penerapan-sistem-manajemen-keselamatan-ketenagalistrikan",
  },
  {
    name: "Service 03",
    description: "Pengelolaan Lingkungan Ketenagalistrikan",
    icon: WrenchScrewdriverIcon,
    href: "/pengelolaan-lingkungan-ketenagalistrikan",
  },
  {
    name: "Service 04",
    description: "Pengendalian Emisi Gas Rumah Kaca Ketenagalistrikan",
    icon: WrenchScrewdriverIcon,
    href: "/greenhouse-gas",
  },
  {
    name: "Service 05",
    description:
      "Pemeriksaan dan Penilaian Kompensasi Tanah, Bangunan dan/atau Tanaman yang Berada di Bawah Ruang Bebas Jaringan Transmisi Tenaga Listrik",
    icon: WrenchScrewdriverIcon,
    href: "/pemeriksaan-dan-penilaian-kompensasi-tanah",
  },
];

const OurServices = () => {
  return (
    <div className="mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base uppercase font-semibold leading-7 text-indigo-600">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-7 tracking-wide text-gray-900 sm:text-5xl">
            Preserving The Earth For Future Generations
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 mb-24 lg:px-8">
        <dl className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="pl-9 p-10 flex flex-col bg-white shadow-md rounded-xl"
            >
              <dt className="inline font-semibold text-xl text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="h-5 w-5 text-[#2F4F75]"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
              <a
                href={feature.href}
                className="inline-block text-[#2F4F75] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-24 after:h-1 after:bg-[#2F4F75] after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-right"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default OurServices;
