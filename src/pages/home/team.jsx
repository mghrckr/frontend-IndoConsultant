import React, { useEffect, useRef, useState } from "react";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInStyle = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: `opacity 1.7s ease ${delay}s, transform 1.7s ease ${delay}s`,
  });

  return (
    <div
      ref={sectionRef}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-7/12 text-center lg:text-left">
          <div className="title-area">
            <span className="sub-title animate-fadeInLeft" style={fadeInStyle(0.4)}>
              OUR BEST TEAM
            </span>
            <h2 className="sec-title animate-fadeInLeft" style={fadeInStyle(0.5)}>
              Core Director
            </h2>
          </div>
        </div>
        <div
          className="lg:w-5/12 text-center lg:text-right self-center animate-fadeInRight"
          style={fadeInStyle(0.7)}
        >
          <a href="/team" className="btn style4 mb-12 lg:mb-0">
            Explore Our Team <i className="fas fa-angle-double-right" />
          </a>
        </div>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex justify-center items-center h-full">
  <div
    className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    style={{
      ...fadeInStyle(0.8),
      width: "300px",
      height: "350px",
    }}
  >
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="/daud.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="Person"
        style={{ height: '100%' }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">Daud</p>
      <p className="mb-4 text-xs text-gray-100">Direktur Keuangan</p>
      <div className="flex items-center justify-center space-x-3">
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center items-center h-full">
  <div
    className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    style={{
      ...fadeInStyle(0.8),
      width: "300px",
      height: "350px",
    }}
  >
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="/sanny.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="Person"
        style={{ height: '100%' }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">Sanny Wicaksono</p>
      <p className="mb-4 text-xs text-gray-100">Direktur Utama</p>
      <div className="flex items-center justify-center space-x-3">
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center items-center h-full">
  <div
    className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    style={{
      ...fadeInStyle(0.8),
      width: "300px",
      height: "350px",
    }}
  >
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="/putut.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="Person"
        style={{ height: '100%' }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">Putut Widodo</p>
      <p className="mb-4 text-xs text-gray-100">Direktur Operasional</p>
      <div className="flex items-center justify-center space-x-3">
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div className="flex justify-center items-center h-full">
  <div
    className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    style={{
      ...fadeInStyle(0.8),
      width: "300px",
      height: "350px",
    }}
  >
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="/kurniawan.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="Person"
        style={{ height: '100%' }}
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">E Kurniawan</p>
      <p className="mb-4 text-xs text-gray-100">Direktur Pengembangan Bisnis & Riset</p>
      <div className="flex items-center justify-center space-x-3">
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-white transition-colors duration-300 hover:text-teal-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

        
        
       
      </div>
    </div>
  );
}
