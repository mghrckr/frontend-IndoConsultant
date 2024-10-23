import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const MainPortofolio = () => {
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
                <button data-filter=".cat1" type="button">
                  <img src="/4.jpg" alt="img" />
                </button>
                <button data-filter=".cat2" type="button">
                  <img src="/director.jpg" alt="img" />
                </button>
                <button data-filter=".cat3" type="button">
                  <img src="e-kurniawan.jpg" alt="img" />
                </button>
              </div>
              <div className="row filter-active-cat1 gy-4">
                <div className="col-xl-6 filter-item cat1">
                  <div className="project-card style3 mx-auto" style={{ width: '900px' }}> {/* Mengatur lebar maksimum dan memusatkan kotak */}
                    <div className="flex">
                      {/* Div kiri dengan lebar 50% */}
                      <div className="w-1/2 p-4">
                        <div className="space-y-4">
                          <h4 className="text-lg font-bold">Jalan Tol Akses Patimban (2023)</h4>
                          <p>
                            Pemetaan topografi menggunakan wahana PUNA dengan sensor LiDAR
                            dan Foto di koridor jalan tol akses Patimban (2023)
                          </p>
                          <h4 className="text-lg font-bold">Lingkup Pekerjaan</h4>
                          <ul className="list-disc pl-5">
                            <li>Akuisisi LiDAR dan Foto Udara</li>
                            <li>Pengolahan data akuisisi</li>
                          </ul>
                        </div>
                        <h4 className="text-lg font-bold mb-2">Output</h4>
                        <div className="flex">
                          <div className="w-1/2 space-y-2">
                            <ul className="list-disc pl-5">
                              <li>Peta Foto Udara</li>
                              <li>DTM</li>
                            </ul>
                          </div>
                          <div className="w-1/2 space-y-2">
                            <ul className="list-disc pl-5">
                              <li>Peta Kontur</li>
                              <li>Peta Tutupan Lahan</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Div kanan dengan lebar 50% */}
                      <div className="w-1/2 p-4 flex items-center justify-center h-96">
                        <Swiper
                          modules={[Autoplay, Pagination, Navigation]}
                          spaceBetween={10}
                          slidesPerView={1}
                          loop={true}
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          className="w-full h-80 rounded-lg overflow-hidden"
                        >
                          <SwiperSlide>
                            <div className="h-full rounded-lg overflow-hidden">
                              <img
                                src="/4.jpg"
                                alt="Image 1"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="h-full rounded-lg overflow-hidden">
                              <img
                                src="/e-kurniawan.jpg"
                                alt="Image 2"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="h-full rounded-lg overflow-hidden">
                              <img
                                src="/director.jpg"
                                alt="Image 3"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </SwiperSlide>
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
