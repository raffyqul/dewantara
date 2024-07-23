import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IcArrow from "../../../assets/Icon/icon-arrow-brow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {

  const [museums, setMuseum] = useState([]);

  useEffect(() => {
    fetch("https://dewantara-api.vercel.app/api/v1/museums/all")
      .then((response) => response.json())
      .then((data) => {
        setMuseum(data.data.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <section className="bg-[#E9ECEF] py-12 md:py-18">
      <div className="container mx-auto px-4 md:px-6">
        <div className="event flex flex-col gap-8 md:gap-12">
          <div className="content-top flex flex-col gap-2 items-center text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Kunjungi Museum</h2>
            <span className="text-sm md:text-base text-gray max-w-[90%] md:max-w-[511px]">
              Terbukanya pintu untuk Anda menjelajahi budaya yang terwujud dalam setiap bayangan wayang
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-10 md:gap-14">
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {museums.map((museum, index) => (
                <div key={index} className="card flex flex-col gap-2">
                  <img src={museum.imageUrl} alt="" className="card-img rounded-lg" />
                  <div className="card-body flex flex-col gap-2 p-4">
                    <div className="wrapper">
                      <h4 className="text-sm md:text-base font-semibold text-darkBlack mb-1.5">{museum.name}</h4>
                      <div className="wrap flex items-center gap-1 mb-2">
                        <img src={IconLocation} alt="" className="w-4 md:w-6" />
                        {museum.Location.map((location) => (
                        <span className="text-sm text-lightBlack font-medium" key={location.id}>
                          {location.regency} , {location.province}
                        </span>
                        ))}
                      </div>
                      <button className="btn btn-link flex items-center text-sm md:text-sm ">
                      <Link to={`/museum/${museum.id}`}>
                          Lihat Museum
                        </Link>
                        <img src={IcArrow} alt="" className="w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
