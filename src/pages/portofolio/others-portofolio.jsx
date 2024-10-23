/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OtherPortfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-area-1 space overflow-hidden bg-smoke">
      <div className="container container2">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-12">
            <div className="title-area mb-45">
              <h2 className="sec-title mb-0 wow fadeInLeft" data-wow-delay=".6s">
                Others Portfolio
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active wow fadeInLeft" data-wow-delay=".7s">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      fontFamily: 'var(--title-font)',
                      color: 'var(--title-color)',
                      background: isOpen ? 'var(--theme-color)' : 'var(--white-color)', // Warna saat dibuka
                      padding: '0px 30px',
                      minHeight: '75px',
                      gap: '10px',
                      marginBottom: '0',
                      textAlign: 'left',
                      border: 'none',
                      transition: '0.3s',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      position: 'relative',
                      width: '100%', // Mengisi seluruh lebar
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--theme-color)')} // Efek hover
                    onMouseLeave={(e) => (e.currentTarget.style.background = isOpen ? 'var(--theme-color)' : 'var(--white-color)')} // Menjaga warna saat terbuka
                    onClick={toggleAccordion}
                  >
                    <span>Pekerjaan Survei Topografi LiDAR Kalimantan Timur (2023)</span>
                    <span className="ml-4">{isOpen ? '-' : '+'}</span> {/* Simbol + atau - */}
                  </button>
                </div>
                <div
                  className={`accordion-collapse transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body p-4 bg-gray-100 rounded-lg">
                    <h4 className="project-card-title mb-2">Ruang Lingkup</h4>
                    <p className="faq-text">
                      Pemetaan Topografi Skala 1:1000 dengan metode UAV LiDAR
                    </p>
                    <h4 className="project-card-title mb-2 mt-2">Output</h4>
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="flex flex-wrap list-disc pl-5">
                          <li className="w-1/2 md:w-1/3">Peta Foto Udara</li>
                          <li className="w-1/2 md:w-1/3">Digital Terrain Model</li>
                          <li className="w-1/2 md:w-1/3">Digital Surface Model</li>
                          <li className="w-1/2 md:w-1/3">Peta Kontur</li>
                          <li className="w-1/2 md:w-1/3">Peta Tutupan Lahan</li>
                        </ul>
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

export default OtherPortfolio;
