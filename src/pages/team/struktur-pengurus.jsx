/* eslint-disable no-unused-vars */
import React from "react";
import StrukturPengurusImage from "../../assets/images/struktur-pengurus-transformed.jpeg";

const StrukturPengurus = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <img
            alt="Struktur Pengurus Images"
            src={StrukturPengurusImage}
            width={2432}
            height={1442}
            className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </div>
  );
};

export default StrukturPengurus;
