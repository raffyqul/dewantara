import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IcArrow from "../../../assets/Icon/icon-arrow-brow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  const [museums, setMuseums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMuseums = (page = 1) => {
    setLoading(true);
    fetch(`https://dewantara-api.vercel.app/api/v1/museums?page=${page}&limit=6`)
      .then((response) => response.json())
      .then((data) => {
        setMuseums(data.data || []);
        setTotalPages(data.meta.totalPages || 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMuseums(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

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
            {loading ? (
              <div>Loading...</div>
            ) : museums.length === 0 ? (
              <div>Museum tidak ditemukan</div>
            ) : (
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
            )}
            <div className="flex justify-center items-center">
              <nav aria-label="Pagination" className="w-full">
                <ul className="pagination flex flex-wrap justify-center gap-2">
                  <li className="pagination-item">
                    <button
                      className="pagination-link p-2 border rounded-md"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">Sebelumnya</span>
                    </button>
                  </li>
                  {[...Array(totalPages).keys()].map((page) => (
                    <li className="pagination-item" key={page + 1}>
                      <button
                        className={`pagination-link p-2 px-4 border rounded-md ${
                          currentPage === page + 1 ? "btn btn-icon" : "text-gray-600"
                        }`}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </button>
                    </li>
                  ))}
                  <li className="pagination-item">
                    <button
                      className="pagination-link p-2 border rounded-md"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">Selanjutnya</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
