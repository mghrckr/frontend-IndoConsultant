import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { HiCheckBadge } from "react-icons/hi2";
import hero from "../../assets/images/services/hero-bg-services-3.jpg";
import FirstImage from "../../assets/images/services/air-pollution.jpg";
import SecondImage from "../../assets/images/services/water-pollution.jpg";
import ThirdImage from "../../assets/images/services/stage-of-preparation.jpg";

const dataAirPollution = [
  {
    name: "Emission already",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Ambient Air",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Work environment air (hazardous gas/vapor)",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Outside noise",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Inside noise",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Work environment light",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Work climate",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: <HiCheckBadge size={24} />,
  },
];
const dataWaterPollution = [
  {
    name: "Waste water",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Seawater chemical factors",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Biological seawater (plankton)",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Leachate and runoff water",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Surface water",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: <HiCheckBadge size={24} />,
  },
];
const dataStagePreparation = [
  {
    name: "Study Analysis EBLS (Environmental Baseline Study)",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Environment Social Assesment (ESA)",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Study AMDAL / DELH",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Study UKL UPL/ DPLH",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: <HiCheckBadge size={24} />,
  },
];

const dataStageOfOperation = [
  {
    name: "Environmental Monitoring / RKL RPL Implementation",
    description:
      "Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Water Treatment / Pengolahan Air",
    description:
      "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Waste Water Treatment / Pengolahan Limbah Cair",
    description:
      "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Bioremediation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Reclamation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Environmental Auditing",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Energy Auditing",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Integrated Management System (IMS) 9001,14001 dan 45001",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Green Building Programs Implementation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "SDGs and Sustainable Programs Implementation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "CSR Programs Implementation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "HSE Programs Implementation",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
  {
    name: "Konsultasi Proper",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: <HiCheckBadge size={24} />,
  },
];

export default function PengelolaanLingkunganKetenagalistrikan() {
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Pengelolaan Lingkungan Ketenagalistrikan
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
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-20">
          {/* Konten Kanan Urutan Pertama */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Air Pollution Control APC
                </p>
                <h2 className="text-lg font-medium leading-7 text-gray-400">
                  Air Pollution Control-APC (Pengendalian Pencamaran Udara-PPU)
                </h2>
                <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  {dataAirPollution.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="flex gap-2 items-start font-semibold text-[#2f4f75]">
                        <div>{feature.icon}</div>
                        <span className="text-lg">{feature.name}</span>
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="First Image"
              src={FirstImage}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
          {/* Akhir Konten Kanan Urutan Pertama */}

          {/* Konten Kiri Urutan Kedua */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Water Pollution Control APC
                </p>
                <h2 className="text-lg font-medium leading-7 text-gray-400">
                  Water Pollution Control-WPC (Pengendalian Pencamaran Air-PPA)
                </h2>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {dataWaterPollution.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="flex gap-2 items-start font-semibold text-[#2f4f75]">
                        <div>{feature.icon}</div>
                        <span className="text-lg">{feature.name}</span>
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt="Second Image"
                src={SecondImage}
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
          {/* Konten Kiri Urutan Kedua */}

          {/* Konten Kanan Urutan Ketiga */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Stage Of Preparation
                </p>

                <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                  {dataStagePreparation.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="flex gap-2 items-start font-semibold text-[#2f4f75]">
                        <div>{feature.icon}</div>
                        <span className="text-lg">{feature.name}</span>
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Third Image"
              src={ThirdImage}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
          {/* Akhir Konten Kanan Urutan Ketiga */}

          {/* Konten Terakhir */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Stage of Operation
                </h2>
                <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {dataStageOfOperation.map((feature) => (
                    <div key={feature.name}>
                      <dt className="text-base font-semibold leading-7">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                          {feature.icon}
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          {/* Akhir Konten Terakhir */}
        </div>
      </div>
    </div>
  );
}
