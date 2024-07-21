import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wayang() {
  const [wayangs, setWayangs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWayangs = (search = "") => {
    setLoading(true);
    fetch(`https://dewantara-api.vercel.app/api/v1/puppets?limit=8&search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setWayangs(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWayangs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWayangs(searchQuery);
  };

  return (
    <section className="py-18 pb-10 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-2xl md:text-3xl">Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex items-center gap-4 justify-center">
              <div className="wrap-search w-full max-w-md">
                <form className="inline-flex w-full" onSubmit={handleSearch}>
                  <input
                    type="search"
                    name=""
                    id=""
                    className="outline-none rounded-l border-2 border-[#ADB5BD] px-4 py-2.5 w-full"
                    placeholder="Cari Wayang..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-search rounded-r border-2 border-[#ADB5BD] px-4 py-2.5 bg-gray-100"
                  >
                    <img src={IcSearch} alt="Search Icon" />
                  </button>
                </form>
              </div>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : wayangs.length === 0 ? (
              <div>Wayang tidak ditemukan</div>
            ) : (
              <div className="content-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wayangs.map((wayang, index) => (
                  <div key={index} className="card rounded-lg overflow-hidden">
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
            <a href="Wayang" className="btn btn-primary">
              Lihat Wayang Lainnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
