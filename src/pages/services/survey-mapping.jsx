import CustomBreadcrumb from "@/components/custom-breadcrumb";
import hero from "../../assets/images/services/hero-bg-services-2.jpg";
import { HiCheckBadge } from "react-icons/hi2";
import SurveyTopografiImage from "../../assets/images/services/image-survey-topografi.jpg";
import KegiatanImage from "../../assets/images/services/services-5-2.jpg";
import pdf from "../../assets/pdf/PERENCANAAN-PENEMPATAN-JARINGAN-UTILITAS-BAWAH-TANAH-SKTT.pdf";
import secondPdf from "../../assets/pdf/Perencanaan-Jaringan-SUTT-SUTET-KPII.pdf";
import SutetImage from "../../assets/images/services/sutet.jpg";

const dataSurveyTopografi = [
  {
    name: "Untuk mendapatkan gambaran geografis, kondisi sosial dan lingkungan suatu daerah.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Untuk mendapatkan lokasi trace jakur SKTT yang terbaik memenuhi aspek keandalan, workability, maintenace dan sesuai dengan peruntukkan pada masterplan utilitas daerah.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Untuk mendapatkan lokasi yang akurat dan jelas untuk penempatan perangkat penunjang seperti joinpit, manhole dan penempatan pulling cable saat konstruksi dll.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Untuk mengetahui status pemilik lahan dan tata guna lahan.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Untuk mengetahui stakeholder pada proyek tersebut.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
];
const dataKegiatan = [
  {
    name: "Survey Recconnisance.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Pengambilan data primer, pengukuran jarak, koordinat, koridor SKTT, pemasangan BM, pembuatan profile memanjang.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Melakukan Perijinan ke Pemerintah setempat.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Merencanakan titik joinpit, manhole dan lokasi pulling cable.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Melakukan penggambaran.",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
];
const dataLandasan = [
  {
    name: "Peraturan Presiden Republik Indonesia Nomor 4 Tahun 2016 tentang Percepatan Pembangunan Infrastruktur Ketenagalistrikan",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Peraturan Pemerintah No 25 tahun 2021 tentang Penyelenggaraan bidang energi dan sumber daya mineral : Jasa lain Penungjang penyedia tenagalistrik",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Peraturan mentri ESDM Nomor 6 Tahun 2021 tentang standarisasi kompetensi tenaga Teknik keteagaListrikan",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Peraturan Mentri ESDM Nomor 13 tahun 2021 tentang ruang bebas dan jarak minimum jaringan transmisi tenaga Listrik dan kompensasi atas tahan bangungan tanaman yang berada di ruang bebas transmisi tenaga Listrik",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
];
const dataPerencanaan = [
  {
    name: "Tegangan Ekstra Tinggi (Extra High Voltage, EHV)",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Tegangan Tinggi (High Voltage, HV)",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Tegangan Menengah (Medium High Voltage, MHV)",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
  {
    name: "Tegangan Rendah (Low Voltage, LV).",
    icon: <HiCheckBadge color="#2f4f75" size={24} />,
  },
];
const posts = [
  {
    id: 1,
    title: "Perencanaan",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Study Desktop",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Survey dan Pengukuran/Pemetaan Jalur",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Soil Investigasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 4,
        name: "Perencanaan Joinpit",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 5,
        name: "Testpit",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 6,
        name: "Pembuatan Longprofile",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 7,
        name: "Pembuatan Kabel Schedule",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
  {
    id: 2,
    title: "Kontruksi",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Pengujian Material",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Pengadaan Material & Fabrikasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Pekerjaan Galian/Pit",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 4,
        name: "Pekerjaan Laying Cable (Opencut/Ducting/Hdd)",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 5,
        name: "Pekerjaan Puling Cable & Jointing",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 6,
        name: "Pekerjaan Testcom",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 7,
        name: "Penerbitan Slo",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
  {
    id: 3,
    title: "Pemeliharaan",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Pemeliharaan Cossbounding",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Asessmen",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Pemeliharaan Jalur Sktt",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
];
const secondPosts = [
  {
    id: 1,
    title: "Perencanaan",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Study Desktop",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Survey dan Pengukuran",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Perencaan Tower Schedule",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 4,
        name: "Perencanaan Longprofile",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 5,
        name: "Perencanaan Pondasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 6,
        name: "Perencanaan Tower",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 7,
        name: "Perijinan Lokasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 8,
        name: "Pembebasan Lahan",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
  {
    id: 2,
    title: "Kontruksi",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Pengujian Material",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Pengadaan Material & Fabrikasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Pekerjaan Pondasi Tower",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 4,
        name: "Pekerjaan Erection Tower",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 5,
        name: "Pembebasan Row",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 6,
        name: "Pekerjaan Stringing & Sagging",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 7,
        name: "Pekerjaan Komissioning",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 8,
        name: "Penerbitan Rlb",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 9,
        name: "Penerbitan Slo (Jika Terkait Dengan Gardu Induk)",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
  {
    id: 3,
    title: "Pemeliharaan",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    listData: [
      {
        id: 1,
        name: "Pemeliharaan Konduktor & Acc",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 2,
        name: "Pemeliharaan Tower Transmisi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 3,
        name: "Pemeliharaan Pondasi",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 4,
        name: "Asessmen",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
      {
        id: 5,
        name: "Pemeliharaan Jalur Row",
        icon: <HiCheckBadge color="#ffffff" size={24} />,
      },
    ],
  },
];

export default function SurveyMapping() {
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
            <div className="mx-auto max-w-7xl py-48">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Pemeriksaan dan Penilaian Kompensasi Tanah, Bangunan dan/atau
                  Tanaman yang Berada di Bawah Ruang Bebas Jaringan Transmisi
                  Tenaga Listrik
                </h1>
                <CustomBreadcrumb
                  currentPage="Survey and Mapping"
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
      <div className="bg-white pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Perencanaan Penempatan Jaringan Utilitas Bawah Tanah
            </h2>
            <p className="text-xl mt-5 uppercase font-semibold leading-7 text-[#2f4f75]">
              Saluran Kabel Tegangan Tinggi (SKTT 150 KV)
            </p>
          </div>
        </div>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Survey Topografi
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600">
                    Maksud dan Tujuan Survey Topografi
                  </p>
                  <dl className="mt-2 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {dataSurveyTopografi.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <div className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                            {feature.icon}
                          </div>
                          {feature.name}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <img
                  alt="Survey Topografi Image"
                  src={SurveyTopografiImage}
                  width={2432}
                  height={1442}
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Kegiatan yang Dilakukan Pada Pekerjaan Survey Topografi
                  </h2>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {dataKegiatan.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                          <div className="absolute left-1 top-1 h-5 w-5 text-indigo-500">
                            {feature.icon}
                          </div>
                          {feature.name}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt="Kegiatan yang Dilakukan Pada Pekerjaan Survey Topografi Image"
                src={KegiatanImage}
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto justify-center flex flex-col max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mt-2 uppercase text-xl font-semibold leading-9 tracking-wide text-[#2f4f75]">
                Work Process
              </p>
              <h2 className="text-3xl font-bold tracking-wide text-gray-900 sm:text-5xl">
                Beberapa Tahapan Dalam Pembangunan Jaringan Transmisi
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-start overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
                >
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/80" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <ul className="space-y-2 mt-5">
                    {post.listData.map((item) => (
                      <li
                        className="flex items-start gap-2 text-white font-medium text-lg"
                        key={item.id}
                      >
                        <div>{item.icon}</div>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mx-auto">
              <button
                className="font-medium mt-10 px-4 py-3 bg-[#2f4f75] hover:bg-[#243d5b] duration-300 rounded-xl text-white text-lg"
                onClick={() => window.open(pdf, "_blank")}
              >
                Read More Document
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Perencanaan Jaringan Sutt/Sutet */}
      <div className="bg-[#F8F7F0] pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Perencanaan Jaringan Sutt/Sutet
            </h2>
            <p className="text-xl mt-5 uppercase font-semibold leading-7 text-[#2f4f75]">
              Pembangunan Infrastrutur Ketenagalistrikkan
            </p>
          </div>
        </div>
        <div className="overflow-hidden py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Landasan Peraturan Perundang Undangan
                  </h2>

                  <dl className="mt-2 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {dataLandasan.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <div className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
                            {feature.icon}
                          </div>
                          {feature.name}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <img
                  alt="Survey Topografi Image"
                  src={SurveyTopografiImage}
                  width={2432}
                  height={1442}
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Perencanaan Jaringan Tegangan Tinggi Dan Tegangan Ekstra
                    Tinggi
                  </h2>
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                    Proses penyaluran energi Listrik dari Pembangkit ke Gardu
                    Induk dapat memalui beberapa tahapan dan terbagi atas
                    beberapa level tegangan yaitu :
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {dataPerencanaan.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <div className="absolute left-1 top-1 h-5 w-5 text-indigo-500">
                            {feature.icon}
                          </div>
                          {feature.name}
                        </dt>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                    Penyaluran/distribusi energi listrik dari gardu induk satu
                    ke gardu induk berikutnya menggunakan konduktor yang
                    rentangkan antara tiang-tiang (tower) pada level tegangan
                    tinggi tersebut.
                  </p>
                </div>
              </div>
              <img
                alt="Sutet Image"
                src={SutetImage}
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F7F0] py-24">
        <div className="mx-auto justify-center flex flex-col max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 uppercase text-xl font-semibold leading-9 tracking-wide text-[#2f4f75]">
              Work Process
            </p>
            <h2 className="text-3xl font-bold tracking-wide text-gray-900 sm:text-5xl">
              Beberapa Tahapan Dalam Pembangunan Jaringan Transmisi
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {secondPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-start overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/80" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <ul className="space-y-2 mt-5">
                  {post.listData.map((item) => (
                    <li
                      className="flex items-start gap-2 text-white font-medium text-lg"
                      key={item.id}
                    >
                      <div>{item.icon}</div>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mx-auto">
            <button
              className="font-medium mt-10 px-4 py-3 bg-[#2f4f75] hover:bg-[#243d5b] duration-300 rounded-xl text-white text-lg"
              onClick={() => window.open(secondPdf, "_blank")}
            >
              Read More Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
