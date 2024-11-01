import { useEffect, useState, useRef } from "react";

export default function GreenBenefits() {
  const [progress, setProgress] = useState({
    energy: 0,
    co2: 0,
    water: 0,
    waste: 0,
    socialRisk: 0,
  });
  const [isVisible, setIsVisible] = useState(false); // Status visibilitas
  const sectionRef = useRef(null); // Referensi untuk elemen

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Jika elemen terlihat, set isVisible ke true
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Menentukan seberapa banyak elemen yang harus terlihat
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Set progress bar saat elemen terlihat
      const timeout = setTimeout(() => {
        setProgress({
          energy: 24,
          co2: 33,
          water: 40,
          waste: 70,
          socialRisk: 80,
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div
      ref={sectionRef} // Tambahkan referensi ke div
      className="why-area-1 overflow-hidden bg-smoke flex items-center justify-center"
      style={{
        backgroundImage: "url('/why-bg-2-1.svg')",
        backgroundSize: "cover", // Use cover to fill the div properly
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "auto", // Set height to auto
        padding: "0", // Remove padding
        margin: "0", // Remove margin
      }}
    >
      <div className="container container2 flex justify-start w-full max-w-md mx-4 my-0"> {/* Set my-0 to remove vertical margin */}
        <div className="title-area space-y-8">
          <h1 className="sec-title font-semibold text-left mt-10" style={{ fontSize: '3.5rem' }}>Green Benefits</h1>
          {Object.keys(progress).map((key) => (
            <SkillBar key={key} title={key} value={progress[key]} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillBar({ title, value, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const increment = value / 100; // Tambahkan nilai bertahap

    if (isVisible) {
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= value) {
          clearInterval(timer);
          startValue = value;
        }
        setDisplayValue(Math.floor(startValue));
      }, 15); // Update setiap 15ms untuk animasi smooth

      return () => clearInterval(timer);
    }
  }, [value, isVisible]);

  return (
    <div className="skill-feature">
      <h3 className="skill-feature_title text-lg font-medium capitalize">{title}</h3>
      <div className="relative w-full">
        {/* Bar abu-abu muda sebagai latar belakang */}
        <div className="progress-background bg-gray-200 h-6 rounded">
          <div
            className="progress-bar bg-green-500 h-6 rounded transition-all duration-1000"
            style={{ width: `${isVisible ? value : 0}%` }} // Memastikan bar hanya mengisi saat terlihat
          ></div>
        </div>
      </div>
      <div className="progress-value text-gray-700 font-bold">
        <span className="counter-number">{displayValue}</span>%
      </div>
    </div>
  );
}
