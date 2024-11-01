export default function GreenHouseGas() {
  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/1.service.jpeg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1
                  className="breadcumb-title font-bold font-sans"
                  style={{ color: '#6C9C43' }}
                >
                  Greenhouse Gas (GHG)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="service-details-area space-top space-extra-bottom overflow-hidden">
        <div className="container container2">
          <div className="row gx-30 flex-row">
            <div className="col-lg-12">
              <div className="service-page-single">
                <div className="page-content">

                  {/* Gambar di kanan, teks di kiri */}
                  <div className="flex flex-col md:flex-row items-center mb-14">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <h2 className="page-subtitle mb-4"> Greenhouse Gas (GHG) <br />
                        Document on Power Plant</h2>
                      <h5 className="mb-4">Carbon Trading Technical Assistance Consultant</h5>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Conducting Inventory of Emission History Data",
                          "Preparation of Mitigation and Monitoring Plan",
                          "Preparation of GHG Emission Report",
                          "PTBAE-PU Verification"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6C9C43] flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 12l2 2 5-5 1.41 1.41-6.41 6.41L7 14.41l1.41-1.41zm3-9C6.47 3 2 7.47 2 13c0 5.53 4.47 10 10 10s10-4.47 10-10S17.53 3 12 3zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="text-gray-700 text-lg font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <h5 className="mb-4 mt-4">Technical Assistance Consultant in Emission Offset</h5>
                      <ul className="mt-4 space-y-2">
                        {[
                          "DRAM Technical Assistance Consultant",
                          "LCAM Technical Assistance Consultant",
                          "Carbon Tax"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6C9C43] flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 12l2 2 5-5 1.41 1.41-6.41 6.41L7 14.41l1.41-1.41zm3-9C6.47 3 2 7.47 2 13c0 5.53 4.47 10 10 10s10-4.47 10-10S17.53 3 12 3zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="text-gray-700 text-lg font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                      <img src="/service/greenhouse-gases.jpg" alt="Air Pollution" className="rounded-2xl shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
