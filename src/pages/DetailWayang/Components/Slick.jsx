import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";

const Slick = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const [otherPuppets, setOtherPuppets] = useState([]);

  useEffect(() => {
    fetch(`https://dewantara-api.vercel.app/api/v1/puppets/all`)
      .then((response) => response.json())
      .then((data) => {
        const filteredPuppets = data.data.filter((item) => item.id !== id);
        setOtherPuppets(filteredPuppets);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  return (
    <section className="pt-10 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content flex flex-col gap-6">
          <div className="content-top flex justify-between items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Lihat Wayang Lainnya</h2>
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
              {otherPuppets.map((wayang, index) => (
                <div
                  key={index.id}
                  className="card rounded-lg overflow-hidden bg-white"
                >
                  <img
                    src={wayang.imageUrl}
                    alt={`Wayang ${index + 1}`}
                    className="card-img py-[25px] px-[50px] w-full"
                  />
                  <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                    <div className="wrap">
                      <h4 className="text-base font-semibold text-darkBlack">
                        {wayang.name}
                      </h4>
                      <span className="text-sm text-gray font-medium">
                      {/* Wayang Kulit */}
                      </span>
                    </div>
                    <button className="btn btn-icon">
                      <Link to={`/wayang/${wayang.id}`}>
                        <img src={IcArrow} alt="Arrow Icon" />
                      </Link>
                    </button>
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
