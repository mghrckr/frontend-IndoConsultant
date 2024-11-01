import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchCarousels, fetchOutput, fetchPortfolios, fetchRuangLingkup } from '@/store/actionCreators';
const BASE_URL = `http://localhost:3000`

const MainPortofolio = () => {
  const dispatch = useDispatch();
  const portfolios = useSelector((state) => state.portfolios.portfolios);
  const filterport = portfolios.filter((p) => p.divisi === "Survey and Mapping Division");
  const ruangLingkup = useSelector((state) => state.ruangLingkup.ruangLingkup);
  const output = useSelector((state) => state.output.output);
  const carousels = useSelector((state) => state.carousels.carousels);
  const [selectedProject, setSelectedProject] = useState(filterport[0]);


  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const ruangLingkupIsi = ruangLingkup.filter(
    (item) => item.PortfolioId === selectedProject.id
  );
  const filteredCarousels = carousels.filter(
    (item) => item.PortfolioId === selectedProject.id
  );
  const filteredOutput = output.filter(
    (item) => item.PortfolioId === selectedProject.id
  );
  console.log(filteredOutput);

  useEffect(() => {
    dispatch(fetchPortfolios());
    dispatch(fetchRuangLingkup());
    dispatch(fetchOutput());
    dispatch(fetchCarousels());
  }, [dispatch]);

  return (
    <div className="project-area-4 space overflow-hidden">
      <div className="container container2">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                Portfolio
              </span>
              <h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
                Survey and Mapping
              </h2>
              <h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
                Division
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="project-wrap wow fadeInUp" data-wow-delay=".5s">
              <div className="project-tab-btn style3 filter-menu-active text-center">
                {filterport.slice(0, 3).map((button, index) => (
                  <button key={button.id}
                    onClick={() => handleProjectClick(button)}
                    data-filter={button.filter} type="button" className="mb-2">
                    <img src={BASE_URL + button.gambar} alt={button.altText} className="w-full rounded-lg shadow-lg" />
                  </button>
                ))}
              </div>
              <div className="row filter-active-cat1 gy-4">
                <div className="col-xl-6 filter-item cat1">
                  <div className="project-card style3 mx-auto" style={{ width: '900px' }}> {/* Mengatur lebar maksimum dan memusatkan kotak */}
                    <div className="flex">
                      {/* Div kiri dengan lebar 50% */}
                      <div className="w-1/2 p-4">
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold">{selectedProject?.judul}</h4>
                          <p>
                            {selectedProject?.isi}
                          </p>
                          <h4 className="text-lg font-bold">Lingkup Pekerjaan</h4>
                          {selectedProject?.lingkupPekerjaan ? (
                            <li>{selectedProject.lingkupPekerjaan}</li>
                          ) : (
                            ruangLingkupIsi.map((item, index) => <li key={index}>{item.isi}</li>)
                          )}
                        </div>
                        <h4 className="text-lg font-bold mb-2 mt-2">Output</h4>
                        <div className="flex">
                          <div className="w-1/2 space-y-2">
                            <ul className="list-disc pl-5">
                              {filteredOutput.map((item, index) => {
                                // Jika indeks lebih besar atau sama dengan 2, pindahkan ke sisi kanan
                                if (index < 2) {
                                  return (
                                    <li key={index}>{item.isi}</li>
                                  );
                                } else {
                                  return null; // Tidak tampilkan jika indeks lebih dari 1 di sisi kiri
                                }
                              })}
                            </ul>
                          </div>
                          <div className="w-1/2 space-y-2">
                            <ul className="list-disc pl-5">
                              {filteredOutput.map((item, index) => {
                                // Menampilkan item berikutnya di sisi kanan
                                if (index >= 2) {
                                  return (
                                    <li key={index}>{item.isi}</li>
                                  );
                                } else {
                                  return null; // Tidak tampilkan jika indeks kurang dari 2 di sisi kanan
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Div kanan dengan lebar 50% */}
                      <div className="w-1/2 p-4 flex items-center justify-center h-100 rounded-2xl overflow-hidden">
                        <Swiper
                          modules={[Autoplay, Pagination, Navigation]}
                          spaceBetween={0}  // Mengatur jarak antar slide ke 0
                          slidesPerView={1}
                          loop={true}
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          className="w-full h-full rounded-2xl overflow-hidden"
                        >
                          {filteredCarousels.map((carousel, index) => (
                            <SwiperSlide key={index} className="rounded-2xl overflow-hidden w-full h-full">
                              <img
                                src={BASE_URL + carousel.gambar}
                                alt={carousel.isi}
                                className="w-full h-full object-cover rounded-2xl overflow-hidden" // Menggunakan `object-cover` agar gambar memenuhi seluruh slide
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPortofolio;
