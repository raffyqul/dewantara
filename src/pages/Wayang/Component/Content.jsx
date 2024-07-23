import React, { useState, useEffect } from "react";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";
import IcScan from "../../../assets/Icon/icon-scan.svg";
import { Link } from "react-router-dom";

export default function Content() {
  const [wayangs, setWayangs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWayangs = (page = 1, search = "") => {
    setLoading(true);
    fetch(`https://dewantara-api.vercel.app/api/v1/puppets?page=${page}&limit=8&search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const sortedWayangs = data.data.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setWayangs(sortedWayangs || []);
        setTotalPages(data.meta.totalPages || 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWayangs(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-[72px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2>Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex flex-col md:flex-row items-center gap-4 justify-center">
              <div className="wrap-search w-full md:w-auto">
                <form onSubmit={handleSearch} className="inline-flex w-full">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="outline-none rounded-l-lg border-2 border-[#ADB5BD] px-4 py-2.5 w-full md:w-[500px]"
                  />
                  <button className="btn btn-search" type="submit">
                    <img src={IcSearch} alt="Cari" />
                    Cari
                  </button>
                </form>
              </div>
              <button className="btn btn-scan flex items-center">
                <img src={IcScan} alt="Scan" />
                <span className="ml-2">Scan Disini</span>
              </button>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : wayangs.length === 0 ? (
              <div>Wayang tidak ditemukan</div>
            ) : (
              <div className="content-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wayangs.map((wayang, index) => (
                  <div key={index} className="card rounded-lg overflow-hidden shadow-md">
                    <img
                      src={wayang.imageUrl}
                      alt={wayang.name}
                      className="card-img w-full"
                    />
                    <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                      <div className="wrap">
                        <h4 className="text-base font-semibold text-darkBlack">
                          {wayang.name}
                        </h4>
                        <span className="text-sm text-gray font-medium">
                          {wayang.type}
                        </span>
                      </div>
                      <button className="btn btn-icon">
                        <Link to={`/wayang/${wayang.id}`}>
                          <img src={IcArrow} alt="Detail" />
                        </Link>
                      </button>
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
