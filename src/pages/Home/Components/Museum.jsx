
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Museum() {

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
    <section className="bg-[#E9ECEF] py-12 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-center text-2xl md:text-3xl">Museum</h2>
            <span className="text-base text-gray text-center max-w-[511px]">
              Terbukanya pintu untuk Anda menjelajahi budaya yang terwujud dalam
              setiap bayangan wayang
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {museums.map((museum,index) => (
                <div className="card flex flex-col gap-2" key={museum.id}>
                  <img src={museum.imageUrl} alt={`Museum ${index + 1}`} className="rounded-lg card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                        {museum.name}
                      </h4>
                      <div className="wrap flex items-center gap-1">
                        <img src={IconLocation} alt="Location Icon" className="max-w-[24px]" />

                        {museum.Location.map((location) => (

                        <span className="text-sm text-lightBlack font-medium" key={location.id}>
                          {location.regency} , {location.province}
                        </span>
                        ))}
                      </div>
                      <button className="btn btn-link flex items-center gap-1">

                        <Link to={`/museum/${museum.id}`}>
                          Lihat Museum
                        </Link>

                        <img src={IcArrow} alt="Arrow Icon" className="max-w-[16px]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">
              <a href="Museum">
              Lihat Museum Lainnya
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
