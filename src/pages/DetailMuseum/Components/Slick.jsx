import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import Slider from "react-slick";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

const Slick = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const { id } = useParams();
  const [otherMuseums, setOtherMuseums] = useState([]);

  useEffect(() => {
    fetch(`https://dewantara-api.vercel.app/api/v1/museums/all`)
      .then((response) => response.json())
      .then((data) => {
        const filteredMuseums = data.data.filter((item) => item.id !== id);
        setOtherMuseums(filteredMuseums);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  return (
    <section className="pt-10 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="content flex flex-col gap-6">
          <div className="content-top flex justify-between items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Lihat Museum Lainnya
            </h2>
            <div className="wrap inline-flex gap-4">
              <button
                className="btn btn-arrow"
                id="prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 19L3 12L10 5"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="btn btn-arrow"
                id="next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5L21 12L14 19"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H3"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="content-bottom slider-wrapper overflow-hidden">
            <Slider ref={sliderRef} className="slider flex gap-6" {...settings}>
            {otherMuseums.map((museum,index) => (
              <div className="card flex flex-col gap-2 max-w-full" key={index}>
                <img src={museum.imageUrl} alt="Museum 1" className="card-img w-full h-auto" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base md:text-lg font-semibold text-darkBlack mb-1.5">
                      {museum.name}
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="w-[24px] h-[24px]"
                      />
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

                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="w-[16px] h-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slick;
